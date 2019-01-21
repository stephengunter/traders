using System.Collections.Generic;
using ApplicationCore.DataAccess;
using ApplicationCore.Models;
using ApplicationCore.Specifications;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ApplicationCore.Helpers;

namespace ApplicationCore.Services
{
	public interface IUserService
	{
		Task<IEnumerable<User>> FetchUsers(IdentityRole role = null, string keyword = "");

		Task UpdateUserAsync(User user);

		User GetUserById(string id);
		User GetUserByEmail(string email);

		User GetUserByUserName(string username);

		Task<IEnumerable<IdentityRole>> GetAllRolesAsync();
		Task<IdentityRole> GetRoleByNameAsync(string name);

		Task<IEnumerable<IdentityRole>> GetRolesByUserIdAsync(string userId);

		RefreshToken GetRefreshToken(string userId);
		bool HasValidRefreshToken(string userId, string token);
		void SetRefreshToken(User user, string token, string remoteIpAddress, double daysToExpire = 5);

	}


	public class UserService : IUserService
	{
		private readonly IDefaultRepository<User> userRepository;
		private readonly IDefaultRepository<RefreshToken> refreshTokenRepository;
		private readonly IDefaultRepository<IdentityRole> roleRepository;
		private readonly IDefaultRepository<IdentityUserRole<string>> userRoleRepository;

		public UserService(IDefaultRepository<User> userRepository, IDefaultRepository<RefreshToken> refreshTokenRepository, IDefaultRepository<IdentityRole> roleRepository,
			IDefaultRepository<IdentityUserRole<string>> userRoleRepository)
		{
			this.userRepository = userRepository;
			this.refreshTokenRepository = refreshTokenRepository;
			this.roleRepository = roleRepository;
			this.userRoleRepository = userRoleRepository;
		}

		public async Task<IEnumerable<User>> FetchUsers(IdentityRole role = null, string keyword = "")
		{
			Task<IEnumerable<User>> getUsersTask;
			if (String.IsNullOrEmpty(keyword))
			{
				getUsersTask = GetAllAsync();
			}
			else
			{
				getUsersTask = GetByKeywordAsync(keyword);
			}

			var users = await getUsersTask;

			if (role != null)
			{

				var idsInRole = await GetUserIdsInRoleAsync(role);
				users = users.Where(p => idsInRole.Contains(p.Id));

			}


			return users;
		}



		public async Task UpdateUserAsync(User user)
		{
			user.LastUpdated = DateTime.Now;
			await userRepository.UpdateAsync(user);

		}


		public User GetUserById(string id)
		{
			var spec = new UserIdFilterSpecifications(id);
			var user = userRepository.GetSingleBySpec(spec);

			return user;
		}

		public User GetUserByUserName(string username)
		{

			var spec = new UserNameFilterSpecifications(username);
			var user = userRepository.GetSingleBySpec(spec);

			return user;
		}

		public User GetUserByUserNameAsync(string username)
		{
			var spec = new UserNameFilterSpecifications(username);
			var user = userRepository.GetSingleBySpec(spec);

			return user;
		}


		public User GetUserByEmail(string email)
		{

			var spec = new UserEmailFilterSpecifications(email);
			var user = userRepository.GetSingleBySpec(spec);


			return user;

		}

		async Task<IEnumerable<User>> GetAllAsync()
		{
			var filter = new UserFilterSpecification();
			return await userRepository.ListAsync(filter);
		}

		async Task<IEnumerable<User>> GetByKeywordAsync(string keyword)
		{
			var filter = new UserKeywordFilterSpecifications(keyword);

			return await userRepository.ListAsync(filter);
		}

		async Task<IList<string>> GetUserIdsInRoleAsync(IdentityRole role)
		{
			var spec = new UserRoleFilterSpecifications(role);
			var userRoles = await userRoleRepository.ListAsync(spec);

			return userRoles.Select(ur => ur.UserId).ToList();


		}

		public async Task<IEnumerable<IdentityRole>> GetAllRolesAsync()
		{
			return await roleRepository.ListAllAsync();
		}

		public async Task<IdentityRole> GetRoleByNameAsync(string name)
		{
			var all = await GetAllRolesAsync();
			return all.Where(r => r.Name == name).FirstOrDefault();
		}

		public async Task<IEnumerable<IdentityRole>> GetRolesByUserIdAsync(string userId)
		{
			var spec = new UserRoleFilterSpecifications(userId);
			var userRoles = await userRoleRepository.ListAsync(spec);

			var roleIds = userRoles.Select(ur => ur.RoleId);

			var allRoles = await GetAllRolesAsync();

			return allRoles.Where(r => roleIds.Contains(r.Id));
		}

		public RefreshToken GetRefreshToken(string userId)
		{
			var spec = new RefreshTokenFilterSpecification(userId);
			return refreshTokenRepository.GetSingleBySpec(spec);

		}

		public void SetRefreshToken(User user, string token, string remoteIpAddress, double daysToExpire = 5)
		{
			var expires = DateTime.UtcNow.AddDays(daysToExpire);

			var exist = GetRefreshToken(user.Id);
			if (exist != null)
			{
				exist.Token = token;
				exist.Expires = expires;
				exist.RemoteIpAddress = remoteIpAddress;

				refreshTokenRepository.Update(exist);
			}
			else
			{
				refreshTokenRepository.Add(new RefreshToken(token, expires, user.Id, remoteIpAddress));

			}

					
			
		}

		public bool HasValidRefreshToken(string userId, string token)
		{
			var entity = GetRefreshToken(userId);
			if (entity == null) return false;

			return entity.Token == token && entity.Active;

		}



	}
}

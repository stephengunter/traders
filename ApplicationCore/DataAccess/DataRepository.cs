using Infrastructure.DataAccess;
using Infrastructure.Interfaces;

namespace ApplicationCore.DataAccess
{

	public interface IDataRepository<T> : IAsyncRepository<T>, IRepository<T> where T : class
	{

	}

	public class DataRepository<T> : EfRepository<T>, IDataRepository<T> where T : class
	{
		public DataRepository(DataContext context) : base(context)
		{

		}
	}
}

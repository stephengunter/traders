using Infrastructure.DataAccess;
using Infrastructure.Interfaces;

namespace ApplicationCore.DataAccess
{

	public interface IRealTimeRepository<T> : IAsyncRepository<T>, IRepository<T> where T : class
	{

	}

	public class RealTimeRepository<T> : EfRepository<T>, IRealTimeRepository<T> where T : class
	{
		public RealTimeRepository(RealTimeContext context) : base(context)
		{

		}
	}
}

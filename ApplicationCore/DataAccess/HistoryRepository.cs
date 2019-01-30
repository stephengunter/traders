using Infrastructure.DataAccess;
using Infrastructure.Interfaces;

namespace ApplicationCore.DataAccess
{

	public interface IHistoryRepository<T> : IAsyncRepository<T>, IRepository<T> where T : class
	{

	}

	public class HistoryRepository<T> : EfRepository<T>, IHistoryRepository<T> where T : class
	{
		public HistoryRepository(HistoryContext context) : base(context)
		{

		}
	}
}

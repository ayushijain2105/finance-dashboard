export default function TransactionFilters({
  search, setSearch,
  filterType, setFilterType,
  sortOrder, setSortOrder
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="🔍 Search transactions..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="flex-1 min-w-[200px] border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <select
        value={filterType}
        onChange={e => setFilterType(e.target.value)}
        className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="highest">Highest Amount</option>
        <option value="lowest">Lowest Amount</option>
      </select>
    </div>
  )
}
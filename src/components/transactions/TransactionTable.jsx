export default function TransactionTable({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-12 text-center">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-gray-500 dark:text-gray-400 font-medium">No transactions found</p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-left">Description</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Type</th>
            <th className="px-6 py-4 text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
          {transactions.map(t => (
            <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{t.date}</td>
              <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-200">{t.description}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs">
                  {t.category}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium
                  ${t.type === "income"
                    ? "bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300"
                    : "bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-300"
                  }`}>
                  {t.type}
                </span>
              </td>
              <td className={`px-6 py-4 text-right font-semibold
                ${t.type === "income" ? "text-green-600" : "text-red-500"}`}>
                {t.type === "income" ? "+" : "-"}${Math.abs(t.amount).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
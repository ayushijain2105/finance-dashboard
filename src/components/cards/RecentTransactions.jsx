import { useFinance } from "../../context/FinanceContext"

export default function RecentTransactions({ onViewAll }) {
  const { transactionList } = useFinance()

  const recent = [...transactionList]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
          Recent Transactions
        </h3>
        <button
          onClick={onViewAll}
          className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          View all →
        </button>
      </div>

      <div className="space-y-3">
        {recent.map(t => (
          <div
            key={t.id}
            className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-700 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                ${t.type === "income"
                  ? "bg-green-50 dark:bg-green-900"
                  : "bg-red-50 dark:bg-red-900"
                }`}>
                {t.type === "income" ? "💚" : "🔴"}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t.description}
                </p>
                <p className="text-xs text-gray-400">{t.date} · {t.category}</p>
              </div>
            </div>
            <p className={`text-sm font-bold ${t.type === "income" ? "text-green-500" : "text-red-500"}`}>
              {t.type === "income" ? "+" : "-"}${Math.abs(t.amount).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
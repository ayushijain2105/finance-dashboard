import { useFinance } from "../../context/FinanceContext"

export default function QuickStats() {
  const { transactionList, totalIncome, totalExpenses } = useFinance()

  const totalTransactions = transactionList.length
  const avgExpense = (totalExpenses / transactionList.filter(t => t.type === "expense").length).toFixed(0)
  const savingsRate = (((totalIncome - totalExpenses) / totalIncome) * 100).toFixed(1)
  const topCategory = Object.entries(
    transactionList
      .filter(t => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount)
        return acc
      }, {})
  ).sort((a, b) => b[1] - a[1])[0]

  const stats = [
    {
      label: "Total Transactions",
      value: totalTransactions,
      icon: "🔄",
      color: "bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
    },
    {
      label: "Avg. Expense",
      value: `$${Number(avgExpense).toLocaleString()}`,
      icon: "📊",
      color: "bg-orange-50 dark:bg-orange-900 text-orange-600 dark:text-orange-300"
    },
    {
      label: "Savings Rate",
      value: `${savingsRate}%`,
      icon: "🎯",
      color: "bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300"
    },
    {
      label: "Top Category",
      value: topCategory ? topCategory[0] : "N/A",
      icon: "🏆",
      color: "bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-300"
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 h-full">
      <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-4">
        Quick Stats
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map(stat => (
          <div
            key={stat.label}
            className={`p-4 rounded-xl ${stat.color}`}
          >
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-xs opacity-70 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
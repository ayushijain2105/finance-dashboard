import { useFinance } from "../context/FinanceContext"

export default function InsightsPage() {
  const { transactionList, totalIncome, totalExpenses, balance } = useFinance()

  // Highest spending category
  const categoryTotals = transactionList
    .filter(t => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount)
      return acc
    }, {})

  const highestCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0]

  // Biggest single expense
  const biggestExpense = transactionList
    .filter(t => t.type === "expense")
    .sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount))[0]

  // Savings rate
  const savingsRate = ((balance / totalIncome) * 100).toFixed(1)

  // Monthly spending
  const monthlySpending = transactionList
    .filter(t => t.type === "expense")
    .reduce((acc, t) => {
      const month = t.date.slice(0, 7)
      acc[month] = (acc[month] || 0) + Math.abs(t.amount)
      return acc
    }, {})

  const highestMonth = Object.entries(monthlySpending)
    .sort((a, b) => b[1] - a[1])[0]

  const insights = [
    {
      icon: "🏆",
      title: "Highest Spending Category",
      value: highestCategory ? highestCategory[0] : "N/A",
      detail: highestCategory ? `$${highestCategory[1].toLocaleString()} total spent` : "",
      color: "border-orange-400",
      bg: "bg-orange-50 dark:bg-orange-900",
      textColor: "text-orange-600 dark:text-orange-300"
    },
    {
      icon: "💸",
      title: "Biggest Single Expense",
      value: biggestExpense ? biggestExpense.description : "N/A",
      detail: biggestExpense ? `$${Math.abs(biggestExpense.amount).toLocaleString()} on ${biggestExpense.date}` : "",
      color: "border-red-400",
      bg: "bg-red-50 dark:bg-red-900",
      textColor: "text-red-600 dark:text-red-300"
    },
    {
      icon: "📈",
      title: "Savings Rate",
      value: `${savingsRate}%`,
      detail: savingsRate > 20 ? "Great job! You're saving well 🎉" : "Try to save more than 20%",
      color: "border-green-400",
      bg: "bg-green-50 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300"
    },
    {
      icon: "📅",
      title: "Highest Spending Month",
      value: highestMonth ? highestMonth[0] : "N/A",
      detail: highestMonth ? `$${highestMonth[1].toLocaleString()} spent` : "",
      color: "border-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-900",
      textColor: "text-indigo-600 dark:text-indigo-300"
    },
  ]

  return (
    <div className="space-y-6">

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border-l-4 ${insight.color}`}
          >
            <div className="flex items-start gap-4">
              <div className={`text-3xl p-3 rounded-xl ${insight.bg}`}>
                {insight.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {insight.title}
                </p>
                <p className={`text-xl font-bold mt-1 ${insight.textColor}`}>
                  {insight.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {insight.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Breakdown Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-4">
          📊 Monthly Breakdown
        </h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Month</th>
              <th className="px-4 py-3 text-right">Income</th>
              <th className="px-4 py-3 text-right">Expenses</th>
              <th className="px-4 py-3 text-right">Saved</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {Object.entries(monthlySpending).map(([month, spent]) => {
              const income = transactionList
                .filter(t => t.type === "income" && t.date.startsWith(month))
                .reduce((sum, t) => sum + t.amount, 0)
              const saved = income - spent
              return (
                <tr key={month} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
                    {month}
                  </td>
                  <td className="px-4 py-3 text-right text-green-600">
                    +${income.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-red-500">
                    -${spent.toLocaleString()}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold
                    ${saved >= 0 ? "text-indigo-600 dark:text-indigo-400" : "text-red-500"}`}>
                    ${saved.toLocaleString()}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-4">
          💰 Income vs Expenses Overview
        </h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500 dark:text-gray-400">Income</span>
              <span className="text-green-600 font-medium">${totalIncome.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3">
              <div className="bg-green-400 h-3 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500 dark:text-gray-400">Expenses</span>
              <span className="text-red-500 font-medium">${totalExpenses.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-400 h-3 rounded-full"
                style={{ width: `${(totalExpenses / totalIncome) * 100}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500 dark:text-gray-400">Saved</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                ${balance.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-indigo-400 h-3 rounded-full"
                style={{ width: `${(balance / totalIncome) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
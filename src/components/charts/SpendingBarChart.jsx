import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useFinance } from "../../context/FinanceContext"

export default function SpendingBarChart() {
  const { categoryData } = useFinance()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
          Spending by Category
        </h3>
        <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
          This year
        </span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={categoryData}
          layout="vertical"
          margin={{ left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
          <XAxis
            type="number"
            tick={{ fontSize: 11 }}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            type="category"
            dataKey="category"
            tick={{ fontSize: 11 }}
            width={80}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar
            dataKey="amount"
            fill="#6366f1"
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
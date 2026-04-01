import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useFinance } from "../../context/FinanceContext"

const COLORS = ["#6366f1", "#f43f5e", "#10b981", "#f59e0b", "#3b82f6", "#8b5cf6", "#ec4899"]

export default function SpendingPieChart() {
  const { categoryData } = useFinance()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">      <h3 className="text-base font-semibold text-gray-700 mb-4">Spending by Category</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ category, percent }) =>
              `${category} ${(percent * 100).toFixed(0)}%`
            }
          >
            {categoryData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
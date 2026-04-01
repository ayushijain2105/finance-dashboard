import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useFinance } from "../../context/FinanceContext"

export default function IncomeExpenseChart() {
  const { monthlyData } = useFinance()

  return (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">      <h3 className="text-base font-semibold text-gray-700 mb-4">Income vs Expenses</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
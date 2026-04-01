export default function SummaryCard({ title, amount, icon, color }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 flex items-center gap-4 border-l-4 ${color}`}>
      <div className="text-4xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          ${amount.toLocaleString()}
        </p>
      </div>
    </div>
  )
}
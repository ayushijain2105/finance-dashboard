import { motion } from "framer-motion"

export default function SummaryCard({ title, amount, icon, color, bgGradient, index, trend }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border-l-4 ${color}`}
    >
      {/* Background accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -mr-6 -mt-6 ${bgGradient}`} />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
            ${amount.toLocaleString()}
          </p>
          {trend && (
            <p className={`text-xs mt-2 font-medium ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
              {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}% vs last month
            </p>
          )}
        </div>
        <div className={`text-4xl p-3 rounded-2xl ${bgGradient} bg-opacity-10`}>
          {icon}
        </div>
      </div>
    </motion.div>
  )
}
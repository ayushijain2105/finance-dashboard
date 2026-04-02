import { motion } from "framer-motion"
import { useFinance } from "../../context/FinanceContext"

const navItems = [
  { label: "Dashboard", icon: "📊", desc: "Overview" },
  { label: "Transactions", icon: "💳", desc: "All activity" },
  { label: "Insights", icon: "💡", desc: "Spending patterns" },
]

export default function Sidebar({ activePage, setActivePage }) {
  const { currentUser } = useFinance()

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            F
          </div>
          <div>
            <h1 className="text-lg font-bold text-indigo-600">FinanceIQ</h1>
            <p className="text-xs text-gray-400">Smart Money Tracking</p>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-3">
          Main Menu
        </p>
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => setActivePage(item.label)}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${activePage === item.label
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            <div className="text-left">
              <p className="leading-tight">{item.label}</p>
              <p className={`text-xs leading-tight ${activePage === item.label ? "text-indigo-200" : "text-gray-400"}`}>
                {item.desc}
              </p>
            </div>
            {activePage === item.label && (
              <motion.div
                layoutId="activeIndicator"
                className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
          <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
            {currentUser.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
              {currentUser.name}
            </p>
            <p className="text-xs text-gray-400 capitalize">{currentUser.role}</p>
          </div>
          <div className={`w-2 h-2 rounded-full ${currentUser.role === "admin" ? "bg-green-400" : "bg-yellow-400"}`} />
        </div>
      </div>
    </aside>
  )
}

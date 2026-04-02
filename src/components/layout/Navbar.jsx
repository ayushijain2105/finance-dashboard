import { motion } from "framer-motion"
import { useFinance } from "../../context/FinanceContext"

export default function Navbar({ activePage, onMenuClick }) {
  const { currentUser, switchRole, darkMode, toggleDarkMode } = useFinance()

  const pageDescriptions = {
    Dashboard: "Welcome back, here's your financial overview",
    Transactions: "Track and manage all your transactions",
    Insights: "Understand your spending patterns",
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm px-4 lg:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Hamburger - mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300"
        >
          ☰
        </button>
        <div>
          <h2 className="text-base lg:text-lg font-bold text-gray-800 dark:text-gray-100">
            {activePage}
          </h2>
          <p className="text-xs text-gray-400 hidden sm:block">
            {pageDescriptions[activePage]}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={switchRole}
          className={`flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-4 py-2 rounded-xl border transition-all font-medium
            ${currentUser.role === "admin"
              ? "border-indigo-300 text-indigo-600 bg-indigo-50 dark:bg-indigo-900 dark:border-indigo-700 dark:text-indigo-300"
              : "border-yellow-300 text-yellow-600 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-300"
            }`}
        >
          {currentUser.role === "admin" ? "👑" : "👁️"}
          <span className="capitalize hidden sm:block">{currentUser.role}</span>
        </motion.button>

        <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
          {currentUser.avatar}
        </div>
      </div>
    </header>
  )
}
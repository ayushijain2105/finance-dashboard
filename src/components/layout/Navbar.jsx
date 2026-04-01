import { useFinance } from "../../context/FinanceContext"

export default function Navbar({ activePage }) {
  const { currentUser, switchRole, darkMode, toggleDarkMode } = useFinance()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {activePage}
      </h2>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-xl hover:scale-110 transition-transform"
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Role Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Role:</span>
          <button
            onClick={switchRole}
            className="text-sm px-3 py-1 rounded-full border border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all"
          >
            {currentUser.role === "admin" ? "👑 Admin" : "👁️ Viewer"}
          </button>
        </div>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
          {currentUser.avatar}
        </div>
      </div>
    </header>
  )
}
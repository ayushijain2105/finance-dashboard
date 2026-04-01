import { useFinance } from "../../context/FinanceContext"

const navItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "Transactions", icon: "💳" },
  { label: "Insights", icon: "💡" },
]

export default function Sidebar({ activePage, setActivePage }) {
  const { currentUser } = useFinance()

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b dark:border-gray-700">
        <h1 className="text-xl font-bold text-indigo-600">💰 FinanceIQ</h1>
        <p className="text-xs text-gray-400 mt-1">Smart Money Tracking</p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActivePage(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
              ${activePage === item.label
                ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-600"
                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
            {currentUser.avatar}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {currentUser.name}
            </p>
            <p className="text-xs text-gray-400 capitalize">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
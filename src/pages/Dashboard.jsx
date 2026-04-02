import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import DashboardHome from "./DashboardHome"
import TransactionsPage from "./TransactionsPage"
import InsightsPage from "./InsightsPage"

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard": return <DashboardHome onNavigate={setActivePage} />
      case "Transactions": return <TransactionsPage />
      case "Insights": return <InsightsPage />
      default: return <p className="text-gray-400">Coming soon...</p>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}>
        <Sidebar
          activePage={activePage}
          setActivePage={(page) => {
            setActivePage(page)
            setSidebarOpen(false)
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar
          activePage={activePage}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 p-4 lg:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
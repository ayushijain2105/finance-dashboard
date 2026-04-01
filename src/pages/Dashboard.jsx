import { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import DashboardHome from "./DashboardHome"
import TransactionsPage from "./TransactionsPage"
import InsightsPage from "./InsightsPage"

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard")

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard": return <DashboardHome />
      case "Transactions": return <TransactionsPage />
      case "Insights": return <InsightsPage />
      default: return <p className="text-gray-400">Coming soon...</p>
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Navbar activePage={activePage} />
        <main className="flex-1 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
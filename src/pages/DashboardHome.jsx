import SummaryCards from "../components/cards/SummaryCards"
import IncomeExpenseChart from "../components/charts/IncomeExpenseChart"
import SpendingPieChart from "../components/charts/SpendingPieChart"

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <SpendingPieChart />
      </div>
    </div>
  )
}
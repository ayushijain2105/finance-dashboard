import { motion } from "framer-motion"
import SummaryCards from "../components/cards/SummaryCards"
import IncomeExpenseChart from "../components/charts/IncomeExpenseChart"
import SpendingBarChart from "../components/charts/SpendingBarChart"
import RecentTransactions from "../components/cards/RecentTransactions"
import QuickStats from "../components/cards/QuickStats"

export default function DashboardHome({ onNavigate }) {
  return (
    <div className="space-y-4 lg:space-y-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SummaryCards />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <IncomeExpenseChart />
        </motion.div>
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <SpendingBarChart />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <RecentTransactions onViewAll={() => onNavigate("Transactions")} />
        </motion.div>
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <QuickStats />
        </motion.div>
      </div>

    </div>
  )
}
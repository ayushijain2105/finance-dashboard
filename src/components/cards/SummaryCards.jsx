import { useFinance } from "../../context/FinanceContext"
import SummaryCard from "./SummaryCard"

export default function SummaryCards() {
  const { balance, totalIncome, totalExpenses } = useFinance()

  const cards = [
    {
      title: "Total Balance",
      amount: balance,
      icon: "💰",
      color: "border-indigo-500",
      bgGradient: "bg-indigo-500",
      trend: 8.2,
    },
    {
      title: "Total Income",
      amount: totalIncome,
      icon: "📈",
      color: "border-green-500",
      bgGradient: "bg-green-500",
      trend: 12.5,
    },
    {
      title: "Total Expenses",
      amount: totalExpenses,
      icon: "📉",
      color: "border-red-500",
      bgGradient: "bg-red-500",
      trend: -3.1,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <SummaryCard key={card.title} {...card} index={index} />
      ))}
    </div>
  )
}
import { useFinance } from "../../context/FinanceContext"
import SummaryCard from "./SummaryCard"

export default function SummaryCards() {
  const { balance, totalIncome, totalExpenses } = useFinance()

  const cards = [
    {
      title: "Total Balance",
      amount: balance,
      icon: "💰",
      color: "border-indigo-500"
    },
    {
      title: "Total Income",
      amount: totalIncome,
      icon: "📈",
      color: "border-green-500"
    },
    {
      title: "Total Expenses",
      amount: totalExpenses,
      icon: "📉",
      color: "border-red-500"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <SummaryCard key={card.title} {...card} />
      ))}
    </div>
  )
}
import { useState } from "react"
import { useFinance } from "../context/FinanceContext"
import TransactionTable from "../components/transactions/TransactionTable"
import TransactionFilters from "../components/transactions/TransactionFilters"
import AddTransactionModal from "../components/transactions/AddTransactionModal"

export default function TransactionsPage() {
  const { transactionList, currentUser } = useFinance()
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortOrder, setSortOrder] = useState("newest")

  const filtered = transactionList
    .filter(t => {
      const matchesSearch =
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
      const matchesType = filterType === "all" || t.type === filterType
      return matchesSearch && matchesType
    })
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.date) - new Date(a.date)
      if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date)
      if (sortOrder === "highest") return Math.abs(b.amount) - Math.abs(a.amount)
      if (sortOrder === "lowest") return Math.abs(a.amount) - Math.abs(b.amount)
      return 0
    })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">All Transactions</h3>        {currentUser.role === "admin" && <AddTransactionModal />}
      </div>
      <TransactionFilters
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFilterType={setFilterType}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <TransactionTable transactions={filtered} />
    </div>
  )
}
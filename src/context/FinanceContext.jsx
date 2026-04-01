import { createContext, useContext, useState } from "react"
import { transactions, monthlyData, categoryData, userRoles } from "../data/mockData"

const FinanceContext = createContext()

export function FinanceProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(userRoles.admin)
  const [transactionList, setTransactionList] = useState(transactions)
  const [darkMode, setDarkMode] = useState(false)

  const totalIncome = transactionList
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactionList
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const balance = totalIncome - totalExpenses

  const switchRole = () => {
    setCurrentUser(prev =>
      prev.role === "admin" ? userRoles.viewer : userRoles.admin
    )
  }

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <FinanceContext.Provider value={{
      currentUser,
      transactionList,
      setTransactionList,
      totalIncome,
      totalExpenses,
      balance,
      monthlyData,
      categoryData,
      switchRole,
      darkMode,
      toggleDarkMode,
    }}>
      <div className={darkMode ? "dark" : ""}>
        {children}
      </div>
    </FinanceContext.Provider>
  )
}

export function useFinance() {
  return useContext(FinanceContext)
}
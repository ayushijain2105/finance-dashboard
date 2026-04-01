import { useState } from "react"
import { useFinance } from "../../context/FinanceContext"

export default function AddTransactionModal() {
  const { transactionList, setTransactionList } = useFinance()
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    description: "", amount: "", category: "", type: "expense", date: ""
  })

  const handleSubmit = () => {
    if (!form.description || !form.amount || !form.category || !form.date) return
    const newTransaction = {
      id: transactionList.length + 1,
      ...form,
      amount: form.type === "expense"
        ? -Math.abs(Number(form.amount))
        : Math.abs(Number(form.amount))
    }
    setTransactionList([newTransaction, ...transactionList])
    setIsOpen(false)
    setForm({ description: "", amount: "", category: "", type: "expense", date: "" })
  }

  return (
    <>
      <button
        onClick={() => {
          console.log("button clicked")
          setIsOpen(true)
        }}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all"
      >
        + Add Transaction
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        >
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Add Transaction
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={e => setForm({ ...form, amount: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="date"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <select
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 border border-gray-200 text-gray-500 py-2 rounded-lg text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
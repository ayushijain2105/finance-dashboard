# 💰 FinanceIQ - Smart Money Tracking

A responsive personal finance dashboard to track income, expenses, and spending insights — built with React + Vite.

🌐 **Live Demo:** https://finance-dashboard-hi52.vercel.app

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://finance-dashboard-hi52.vercel.app)

---

## ✨ Features

- 📊 **Dashboard Overview** — Summary cards for Balance, Income, and Expenses
- 📈 **Charts** — Line chart (Income vs Expenses over time) and Pie chart (Spending by category)
- 💳 **Transactions Table** — Full list with search, filter by type, and sort by date/amount
- 👑 **Role-Based UI** — Admin can add/edit transactions, Viewer has read-only access
- 💡 **Insights Section** — Highest spending category, biggest expense, savings rate, monthly breakdown
- 🌙 **Dark Mode** — Full dark mode support across all pages
- 📱 **Responsive Design** — Works across different screen sizes

---
## 📸 Preview
![Dashboard Preview]

---
## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React (Vite) | Frontend framework |
| Tailwind CSS | Styling and dark mode |
| Recharts | Charts and visualizations |
| Context API | Global state management |

---

## 📁 Project Structure
```
src/
├── components/
│   ├── cards/          # Summary cards
│   ├── charts/         # Line and Pie charts
│   ├── layout/         # Sidebar and Navbar
│   └── transactions/   # Table, filters, modal
├── context/            # FinanceContext (global state)
├── data/               # Mock transaction data
├── pages/              # Dashboard, Transactions, Insights
└── utils/              # Helper functions
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 🎭 Role Switching

Click the **Role button** in the top navbar to switch between:

- 👑 **Admin** — Can view all data and add new transactions
- 👁️ **Viewer** — Read-only access, no add/edit permissions

---

## 💡 Approach & Decisions

- Used **Context API** over Redux to keep things simple but scalable
- **Mock data** is structured to be easily replaceable with a real API
- **Component separation** — dumb components (UI only) vs smart components (data aware)
- **Dark mode** implemented using Tailwind's class strategy for instant theme switching
- **Empty states** handled gracefully in the transactions table

---

## 🌟 Optional Enhancements Implemented

- ✅ Dark mode
- ✅ Role-based UI simulation
- ✅ Insights with real computed data
- ✅ Empty state handling

---

## 👨‍💻 Author

**Ayushi Jain**

# Expense Tracker

A web app to track income and expenses and visualize them with chart.

Features
- Add / delete transactions
- Modify categories with custom colors
- Balance, income and expense calculation
- Chart visualization
- Search transactions by keyword
- Sort transactions (recent / old)
- Export transactions as PDF

Data
- User registration and login (JWT authentication)
- Personal transactions saved on backend
- Guest mode with localStorage
- Separate data between guest and authenticated users
  
Used technologies
- Frontend
    - React (Vite)
    - TailwindCSS
    - Recharts
    - Context API
    - jsPDF
    - LocalStorage (guest mode)
- Backend
    -Node.js
    - Express
    - JWT (authentication)
    - bcrypt (password hashing)

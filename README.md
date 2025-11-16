🎉 Library Web MVP — Modern Frontend for Digital Libraries

A lightweight, fast, and scalable MVP frontend built for digital library systems. Designed with a clean architecture, smooth UX, and production-ready patterns — perfect for real projects or portfolio showcases.

⚡ Built using today’s best frontend stack: React, TypeScript, Vite, Tailwind, Redux Toolkit, TanStack Query, shadcn/ui.

🚀 Live Preview

(Drop your GIF or video demo here)

./assets/demo.gif

✨ Key Features
🌟 UX & Performance

⚡ Optimistic UI — instant feedback on borrow actions

🔁 Smart caching & refetch with TanStack Query

🧩 Reusable & composable UI components via shadcn/ui

🎬 Optional Framer Motion animations for micro-interactions

🧱 Architecture

🧠 Redux Toolkit for global state (auth, filters, cart, UI)

🔌 API layer with typed TanStack Query hooks

🗂️ Feature-based folder structure for scalability

✨ Type-safe development with React + TypeScript

🚀 Blazing fast Vite DX

🎨 Design

Tailwind CSS utility styling

Clean, modern, responsive layout

Accessible and keyboard-friendly components

🧭 Tech Stack
Category Tools
UI React, shadcn/ui, Tailwind CSS
State Redux Toolkit, TanStack Query
Animations Framer Motion (optional)
Tooling TypeScript, Vite
Utilities Day.js
QA Jest, React Testing Library, Playwright
🛠️ Getting Started

1. Clone & Install
   git clone https://github.com/<your-username>/library-web-mvp.git
   cd library-web-mvp
   npm install

2. Run Dev Server
   npm run dev

Visit: http://localhost:5173

3. Build for Production
   npm run build
   npm run preview

4. Formatting & Linting
   npm run lint
   npm run format

🔧 Environment Variables

Create .env (or copy from .env.example):

VITE_API_BASE_URL=https://api.example.com
VITE_DEFAULT_PAGE_SIZE=12
VITE_FEATURE_FLAGS_ENABLE_ANIMATIONS=true

Vars Explained

VITE_API_BASE_URL — backend URL

VITE_DEFAULT_PAGE_SIZE — pagination limit

VITE_FEATURE_FLAGS_ENABLE_ANIMATIONS — enable/disable Framer Motion

📁 Project Structure
src/
├─ api/ # API hooks (TanStack Query)
├─ components/ # shared UI components
├─ features/ # domain modules: books, borrow, account
├─ hooks/ # custom hooks
├─ store/ # Redux slices
├─ styles/ # Tailwind/theme config
├─ utils/ # helpers, date utils
└─ App.tsx

🔁 Data Flow
flowchart LR
UI[User Interface]
subgraph Client
UI --> |calls| Query[TanStack Query]
UI --> |dispatch| Store[Redux Toolkit]
end
Query --> |fetch| API[Backend API]
API --> DB[(Database)]
Store --> |reads| Query
Store --> |updates| UI

✅ Core Features

🔍 Browse books with search & filters

📚 Borrow/return books with optimistic updates

🛒 Reservation cart system

🔐 Auth & token persistence (secure storage)

📄 Pagination & infinite scroll

🗓️ Date formatting via Day.js

♿ Accessible UI components

📦 API Example
GET /books
{
"data": [
{ "id": "1", "title": "Book Title", "available": 3, "publishedAt": "2025-05-01T00:00:00Z" }
],
"meta": { "total": 100 }
}

POST /borrow
{ "bookId": "1", "userId": "42" }

Response:

200 OK → updated stock

4xx/5xx → rollback handled by TanStack Query

🎨 Animations

Enable in .env:

VITE_FEATURE_FLAGS_ENABLE_ANIMATIONS=true

Component example:

import { motion } from 'framer-motion'

export function BookCard({ book }) {
return (
<motion.div
layout
whileHover={{ scale: 1.02 }}
className="card" >

<h3>{book.title}</h3>
</motion.div>
)
}

🧪 Testing
npm run test
npm run test:coverage
npm run e2e

Unit tests (Jest + RTL)

E2E (Playwright)

♻️ CI/CD (Recommended)

Install dependencies

Run lint & tests

Build artifacts

Deploy (Vercel, Netlify, Cloud Run, etc.)

♟️ Performance & Accessibility

Preload fonts & critical assets

Code-splitting per route

Minimum 80+ Lighthouse score for PWA, accessibility, performance

ARIA-compliant UI

🤝 Contributing

Fork

Create feature branch feat/<feature>

Run tests

Open PR — include screenshots or GIF

📜 License

MIT © Herfando

🙌 Acknowledgements

Thanks to the ecosystem:
React, Vite, Tailwind, TanStack Query, Redux Toolkit, shadcn/ui, Framer Motion.

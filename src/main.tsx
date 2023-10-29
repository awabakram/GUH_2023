import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginDone from './components/LoginDone'
import Dashboard from './components/Dashboard'
import Stats from './components/Stats'
import Account from './components/Account'
import 'bootstrap/dist/css/bootstrap.css'
import Game from "./components/game"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="done" element={<LoginDone />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="stats" element={<Stats />} />
        <Route path="account" element={<Account />} />
        <Route path="/done" element={<LoginDone />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

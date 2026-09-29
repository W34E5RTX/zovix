import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminLoginPage from './admin/AdminLoginPage'
import AdminDashboardPage from './admin/AdminDashboardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
    </Routes>
  )
}

import './App.css'
import Dashboard from './pages/Dashboard'
import Gamification from './pages/Gamification'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import JobPost from './pages/JobPost'
import Login from './pages/Login'
import Messaging from './pages/Messaging'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Settings from './pages/Settings'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<JobDetails />} />
        <Route path="/projects/new" element={<JobPost />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

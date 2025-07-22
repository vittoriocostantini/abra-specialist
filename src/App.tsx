import './themes/App.css'
import NavBarPages from './components/nav-bar/nav-bar-pages'
import RightSidebar from './components/sidebar/right-side-bar'
import TicketsDashboard from './pages/specialist/tickets/tickets-dashboard'
import AgentProfileDashboard from './pages/specialist/dashboard/agent-profile-dashboard'
import ClientsChat from './pages/clients/clients-chat'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <main className="h-screen w-full overflow-hidden bg-[#f5f5f5]">
        <div className="flex h-full">
          <NavBarPages />
          <div className="flex-1 flex min-w-0">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<AgentProfileDashboard />} />
                <Route path="/tickets" element={<TicketsDashboard />} />
                <Route path="/chat/:ticketId" element={<ClientsChat />} />
              </Routes>
            <RightSidebar />
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App

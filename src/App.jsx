import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AiReviewPage } from './pages/AiReviewPage'
import { ClientDetailPage } from './pages/ClientDetailPage'
import { ClientListPage } from './pages/ClientListPage'
import { DashboardPage } from './pages/DashboardPage'
import { FollowUpPage } from './pages/FollowUpPage'
import { LoginPage } from './pages/LoginPage'
import { NewClientPage } from './pages/NewClientPage'
import { NewVisitPage } from './pages/NewVisitPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientListPage />} />
          <Route path="/clients/new" element={<NewClientPage />} />
          <Route path="/clients/:clientId" element={<ClientDetailPage />} />
          <Route path="/visits/new" element={<NewVisitPage />} />
          <Route path="/ai-review" element={<AiReviewPage />} />
          <Route path="/follow-up" element={<FollowUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

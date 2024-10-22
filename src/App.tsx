import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/frontend'
import Layout from './pages/frontend/layout'
import Login from './pages/admin/auth/login'
import ForgotPassword from './pages/admin/auth/forgot-password'
import ResetPassword from './pages/admin/auth/reset-password'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/auth" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

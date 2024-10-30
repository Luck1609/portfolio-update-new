import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/frontend'
import Layout from './pages/frontend/layout'
import Login from './pages/admin/auth/login'
import ForgotPassword from './pages/admin/auth/forgot-password'
import ResetPassword from './pages/admin/auth/reset-password'
// import Projects from './pages/admin/projects'
import AuthLayout from './pages/admin/layout'

import Experience from './pages/admin/experience'
import AuthCheck from './pages/admin/layout/auth-check'

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<AuthCheck />}>
            <Route path="/auth" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route element={<AuthLayout />}>
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/experience" element={<Experience />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

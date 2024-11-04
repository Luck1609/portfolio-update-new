import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/frontend/layout'
// import Projects from './pages/admin/projects'

const Home = lazy(() => import('./pages/frontend'))
const AuthLayout = lazy(() => import('./pages/admin/layout'))
const Login = lazy(() => import('./pages/admin/auth/login'))
const ForgotPassword = lazy(() => import('./pages/admin/auth/forgot-password'))
const ResetPassword = lazy(() => import('./pages/admin/auth/reset-password'))
const AuthCheck = lazy(() => import('./pages/admin/layout/auth-check'))
const Experience = lazy(() => import('./pages/admin/experience'))
const Project = lazy(() => import('./pages/admin/project'))
const Education = lazy(() => import('./pages/admin/education'))

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
              <Route path="/project" element={<Project />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

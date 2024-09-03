import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/frontend'
import Layout from './pages/frontend/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

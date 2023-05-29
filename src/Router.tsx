import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { DetailsCalc } from './pages/DetailsCalc'

export function Router() {
  return (
    <Routes>
      <Route path="/calculo" element={<Home />} />
      <Route path="/" element={<Navigate to="/calculo" />} />
      <Route path="/calculo/:id" element={<DetailsCalc />} />
    </Routes>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import AdminMain from './layout/Admin'

function App() {
  return (
    <Routes>
      <Route path='auth/*' element={<div>auth</div>} />
      <Route path='admin/*' element={<AdminMain />} />
      <Route path='rtl/*' element={'rtl admin'} />
      <Route path='/' element={<Navigate to='/admin' replace />} />
    </Routes>
  )
}

export default App

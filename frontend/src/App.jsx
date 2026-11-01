import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import DashboardLayout from './layout/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import AllApplication from './pages/dashboard/AllApplication'
import AddApplication from './pages/dashboard/AddApplication'
import ManageApplication from './pages/dashboard/ManageApplication'
import ProtectedRoutes from './routes/ProtectedRoutes'
import EditApplication from './pages/dashboard/EditApplication'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route index element={<Overview />} />
          <Route path='all-application' element={<AllApplication />} />
          <Route path='add-application' element={<AddApplication />} />
          <Route path='manage-application' element={<ManageApplication />} />
          <Route path='edit-application' element={<EditApplication />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

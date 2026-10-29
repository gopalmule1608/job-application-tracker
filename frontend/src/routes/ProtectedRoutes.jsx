import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const isauthenticate = localStorage.getItem('token')

    if (!isauthenticate) {
        return <Navigate to={'/login'} />
    }
    return <Outlet />

}

export default ProtectedRoutes

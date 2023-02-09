import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Ristricted = () => {
  return (
    <div>{localStorage.getItem('token')?<Navigate to='/' /> :<Outlet /> }</div>
  )
}

export default Ristricted
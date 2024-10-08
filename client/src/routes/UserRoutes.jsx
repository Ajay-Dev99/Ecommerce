import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'

function UserRoutes() {
  return (
  <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<CartPage/>}/>

  </Routes>
  )
}

export default UserRoutes


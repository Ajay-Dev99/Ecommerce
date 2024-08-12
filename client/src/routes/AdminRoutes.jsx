import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdmindashboardPage from '../pages/AdmindashboardPage'
import AddproductPage from '../pages/AddproductPage'

function AdminRoutes() {
  return (
 <Routes>
    <Route path='/login' element ={<LoginPage role={"ADMIN"}/>} />
    <Route path='/' element ={<AdmindashboardPage/>} />
    <Route path='/addproduct' element ={<AddproductPage/>} />
 </Routes>

 
  )
}

export default AdminRoutes

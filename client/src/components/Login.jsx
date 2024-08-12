import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../services/userApis'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux'
import { setUserDetails } from '../redux/setUser'
import { adminLogin } from '../services/adminApis'

function Login({role}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values,setValues] = useState({email:'',password:''})

  const onSubmit = ()=>{
    if(role){
      adminLogin(values).then((res)=>{
        localStorage.setItem("ADMIN_JWT",res.data.token)
        navigate("/admin/")
      }).catch((err)=>{
        toast.error(err.response.data.error)
      })
    }else{
      login(values).then((res)=>{
        localStorage.setItem("JWT",res.data.token)
        dispatch(setUserDetails(res.data.user))
        toast.success(res.data.message)
        navigate("/")
      }).catch((err)=>{
        toast.error(err.response.data.error)
      })
    }

  }
  return (
    <div className='bg-success d-flex justify-content-center align-items-center height-vh'>
     <div className='d-flex flex-column gap-2 p-5 text-black bg-white'>
      <h1 className='text-center'>{role && role} LOGIN</h1>
      <label htmlFor="email">Email</label>
      <input className='login_input' type="email" name='email' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
      <label htmlFor="password">Password</label>
      <input className='login_input' type="password" name="password" id="" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
      <button className='rounded-3 bg-success text-white py-2' onClick={onSubmit}>Login</button>
     { !role && <p className='text-center'>Don't have an account?<Link to={"/register"}>signup</Link></p>}
     </div>
    </div>
  )
}

export default Login

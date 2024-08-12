import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/userApis'
import { toast } from 'react-toastify'

function Register() {
  const navigate = useNavigate()
  const [values,setValues] = useState({name:'',email:'',password:'',confirmpassword:''})  


  const onSubmit = ()=>{
    register(values).then((res)=>{
      navigate("/login")
    }).catch((err)=>{
      toast.error(err.response.data.error)
    })
  }
  return (
    <div className='bg-success d-flex justify-content-center align-items-center height-vh'>
    <div className='d-flex flex-column gap-2 p-5 text-black bg-white'>
     <h1 className='text-center'>Create Account</h1>

     <label htmlFor="name">Name</label>
     <input className='login_input' type="text" name='name' onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}} />

     <label htmlFor="email">Email</label>
     <input className='login_input' type="email" name='email' onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
     <label htmlFor="password">Password</label>
     <input className='login_input' type="password" name="password" id="" onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
     <label htmlFor="password">Confirm Password</label>
     <input className='login_input' type="password" name="confirmpassword" id="" onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
     <button className='rounded-3 bg-success text-white py-2' onClick={onSubmit}>signup</button>
     <p className='text-center'>Already have an account?<Link to={"/login"}>Login</Link></p>
    </div>
   </div>
  )
}

export default Register

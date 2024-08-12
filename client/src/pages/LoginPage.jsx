import React from 'react'
import Login from '../components/Login'

function LoginPage({role}) {
  return (
    <div>
      <Login role={role}/>
    </div>
  )
}

export default LoginPage

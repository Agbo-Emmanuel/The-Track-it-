import React from 'react'
import '../pagesCss/Login.css'

const Login = () => {

  return (
    <>
    
      <div className='Login'>
        <div className='loginContainer'>
          <h1>Login</h1>
          <p>Welcome back</p>
          <div className='loginformPart'>
            <div className='logininputPart'>
              <label>Email</label>
              <input
                placeholder="enter email"
              />
            </div>
            <div className='logininputPart'>
              <label>Password</label>
              <input
                placeholder="enter password"
              />
            </div>
          </div>
          <button className='loginButton'>Create Account</button>
        </div>
      </div>
    
    </>
  )
}

export default Login
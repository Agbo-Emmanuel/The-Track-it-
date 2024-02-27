import React from 'react'
import '../pagesCss/Login.css'
import { Link } from 'react-router-dom'

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
                placeholder="email"
              />
            </div>
            <div className='logininputPart'>
              <label>Password</label>
              <input
                placeholder="password"
              />
            </div>
          </div>
          <button className='loginButton'>Login</button>
          <p className='linkToLoginPage'>Don't have an Account? <Link to='/companysignup' className='loginLink'>Signup</Link></p>
        </div>
      </div>
    
    </>
  )
}

export default Login
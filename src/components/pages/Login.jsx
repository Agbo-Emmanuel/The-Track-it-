import React, { useRef, useState } from 'react'
import '../pagesCss/Login.css'
import { Link } from 'react-router-dom'
import axios from "axios"
// import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Login = () => {

  const loginInput = useRef()

  const [seePassword, setSeePassword] = useState(false)

  const handleSeePassword = ()=>{
    setSeePassword(true)
    if (loginInput.current.type === 'password'){
        loginInput.current.type = 'text'
    }
  }

  const handleNotSeePassword = ()=>{
    setSeePassword(false)
    if (loginInput.current.type === 'text'){
        loginInput.current.type = 'password'
    }
  }

  const [userData, setUserData] = useState({
    companyEmail: "",
    companyPassword: "",
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    // console.log(userData)
}

  const theData = {companyEmail: userData.companyEmail, companyPassword: userData.companyPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/signUp"


  const handleLoginAccount = async(e)=>{
    
    e.preventDefault();

      try{
          const response = await axios.post(url, theData)
          console.log(response)
          // localStorage.setItem("companyFirstLetter", response.data.CompanyName.charAt(0))
          
          // Swal.fire({
          //   title: "Success!",
          //   text: response.data.message,
          //   icon: "success",
          //   confirmButtonText: "ok",
          // }).then(function() {
          //        window.location.href = "/companydashboard";
          //     }) 
      }
      catch(err){
        // Swal.fire({
        //   title: "error!",
        //   text: err.response.message,
        //   icon: "error",
        //   confirmButtonText: "ok",
        //   }) 
          console.log(err)
      }
  }


  return (
    <>
    
      <div className='Login'>
        <div className='loginLogo'>
          <img src={trackitLogo} alt=''/>
        </div>
        <div className='loginContainer'>
          <h1>Login</h1>
          <p>Welcome back</p>
          <div className='loginformPart'>
            <div className='logininputPart'>
              <label>Email</label>
              <input
                placeholder="email"
                name='companyEmail'
                value={userData.companyEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className='logininputPart'>
              <label>Password</label>
              <div className='logininputParttheInput'>
                <input
                  type='password'
                  placeholder="password"
                  name='companyPassword'
                  value={userData.companyPassword}
                  onChange={handleInputChange}
                  ref={loginInput}
                />
                <div className='loginEyeIcon'>
                  {                
                    seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                  <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                  }
                </div>
              </div>
            </div>
          </div>
          <button className='loginButton' onClick={handleLoginAccount}>Login</button>
          <p className='linkToLoginPage'>Don't have an Account? <Link to='/companysignup' className='loginLink'>Signup</Link></p>
        </div>
      </div>
    
    </>
  )
}

export default Login
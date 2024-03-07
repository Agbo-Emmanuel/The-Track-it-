import React, { useRef, useState, useContext } from 'react'
import '../pagesCss/Login.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Thecontext } from '../../App'

const CompanyLogin = () => {


  const {setCompanyName, setCompanyFirstLeter} = useContext(Thecontext)

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
    riderEmail: "",
    riderPassword: "",
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    // console.log(userData)
}

  const theData = {identifier : userData.riderEmail, riderPassword: userData.riderPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/signIn"


  const handleLoginAccount = async(e)=>{
    
    e.preventDefault();

      try{
          const response = await axios.post(url, theData)
          console.log(response)
          localStorage.setItem('ridertoken', response.data.ridertoken)
          localStorage.setItem('companyname', response.data.company.companyName)
          localStorage.setItem('companyfirstletter', response.data.company.companyName.charAt(0))
          localStorage.setItem("companyFirstLetter", response.data.CompanyName.charAt(0))
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
          }).then(function() {
                 window.location.href = "/riderdashboard";
              }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.message,
          icon: "error",
          confirmButtonText: "ok",
          }) 
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
                name='riderEmail'
                value={userData.riderEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className='logininputPart'>
              <label>Password</label>
              <div className='logininputParttheInput'>
                <input
                  type='password'
                  placeholder="password"
                  name='riderPassword'
                  value={userData.riderPassword}
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
        </div>
      </div>
    
    </>
  )
}

export default CompanyLogin
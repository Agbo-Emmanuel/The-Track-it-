import React, { useRef, useState, useContext } from 'react'
import '../pagesCss/Login.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Thecontext } from '../../App'
import { PulseLoader } from "react-spinners"


const CompanyLogin = () => {


  const {setCompanyName, setCompanyFirstLeter} = useContext(Thecontext)

  const loginInput = useRef()

  const [seePassword, setSeePassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  const theData = {identifier : userData.companyEmail, companyPassword: userData.companyPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/signIn"


  const handleLoginAccount = async(e)=>{
    
    e.preventDefault();

      try{
        setIsLoading(true)
          const response = await axios.post(url, theData)
          console.log(response)
          localStorage.setItem('companytoken', response.data.companyToken)
          // localStorage.setItem("companyFirstLetter", response.data.CompanyName.charAt(0))
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
          }).then(function() {
                 window.location.href = "/companydashboard";
              }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "ok",
          }) 
          console.log(err)
      }
      setIsLoading(false)
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
          <button className='loginButton' disabled= {isLoading} onClick={handleLoginAccount}>{isLoading ? <PulseLoader color="white"/> : "Login" }</button>
          <p className='linkToLoginPage'>Don't have an Account? <Link to='/companysignup' className='loginLink'>Signup</Link></p>
          <p><Link  className="logintoRiderLink" to='/riderlogin'>login</Link> as rider</p>
        </div>
      </div>
      {/* <FaSpinner /> */}
    </>
  )
}

export default CompanyLogin
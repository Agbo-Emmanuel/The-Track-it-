import React, { useRef, useState } from 'react'
import '../pagesCss/Companysignup.css'
// import Signupimg from '../images/Signupimg.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { PulseLoader } from "react-spinners"

const Companysignup = () => {

    
    const navigate = useNavigate();

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


  const [formErrors, setFormErrors]  = useState()
  // console.log(formErrors)

//   const handleImageChange = (e)=>{
//      setProfileImage(URL.createObjectURL(e.target.files[0]))
//   }

  const [userData, setUserData] = useState({
    companyName: "",
    companyAddress: "",
    companyPhoneNumber: "",
    companyEmail: "",
    companyPassword: "",
    confirmCompanyPassword: "",
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    // console.log(userData)
}
// const handleCreateAccount = ()=>{
//     navigate("/companydashboard");
// }


  const theData = {companyName:userData.companyName, companyAddress: userData.companyAddress, companyPhoneNumber: userData.companyPhoneNumber, companyEmail: userData.companyEmail, companyPassword: userData.companyPassword, confirmCompanyPassword: userData.confirmCompanyPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/signUp"


  const handleCreateAccount = async(e)=>{
    
    e.preventDefault();
    setFormErrors(validate(userData));
    // console.log(formErrors)

      try{
          const response = await axios.post(url, theData)
          console.log(response)
          // localStorage.setItem("companyFirstLetter", response.data.CompanyName.charAt(0))
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
          }).then(function() {
                 window.location.href = "/companysignup";
              }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.data.error,
          icon: "error",
          confirmButtonText: "ok",
          }) 
          console.log(err)
      }
  }

  const validate = (values)=>{
    const errors = {};
    const corremail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const correname = /^[a-z ,.'-]+$/i
    // console.log(values.confirmPassword)
    if ( !values.companyName ) {
      errors.companyName = "company name is required!"
    }
    if ( !values.companyAddress ) {
      errors.companyAddress = "company address is required!"
    }
    if ( !values.companyEmail ) {
      errors.companyEmail = "email is required!"
    } else if (!corremail.test(values.companyEmail)) {
      errors.companyEmail = "This is not a valid email format!"
    }
    if ( !values.companyPhoneNumber ) {
      errors.companyPhoneNumber = "phone number is required!"
    }
    if ( values.companyPhoneNumber.length <  11 ) {
      errors.companyPhoneNumber = "should not be less than 11 characters"
    }
    if ( values.companyPhoneNumber.length >  11 ) {
      errors.companyPhoneNumber = "should not be more than 11 characters"
    }
    if ( !values.companyPassword ) {
      errors.companyPassword = "password is required!"
    }
    if ( !values.confirmCompanyPassword ) {
      errors.confirmCompanyPassword = "must confirm password"
    } else if(values.confirmCompanyPassword === values.companyPassword) {
        errors.confirmCompanyPassword = ""
    }else{ 
        errors.confirmCompanyPassword = "the password must  match "
    }

    return errors;
    
  }


  return (
    <>
    
        <div className='Companysignup'>
          <div className='companySignupLogo'>
            <img src={trackitLogo} alt=''/>
          </div>
            {/* <div className='Companysignupimg'>
                <img src={Signupimg} alt=''/>
            </div> */}
            <div className='signupContainer'>
                <h1>Sign Up</h1>
                <p>Partner with us </p>
                {/* <PulseLoader color="hsla(168, 67%, 53%, 1)" size={0}/> */}
                <div className='formPart'>
                    <div className='signupInputReal'>
                      <div className='nameinputPart'>
                          <label>Company's name</label>
                          <input
                              placeholder="company's name"
                              name='companyName'
                              value={userData.companyName}
                              onChange={handleInputChange}
                          />
                          {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.companyName}</p> : null }
                      </div>
                      <div className='inputPart'>
                            <label>Company's Address</label>
                            <input
                                type='text'
                                placeholder="company address"
                                name='companyAddress'
                                value={userData.companyAddress}
                                onChange={handleInputChange}
                            />
                        {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.companyAddress}</p> : null }
                        </div>
                    </div>
                        
                    <div className='signupInputReal'>
                      <div className='inputPart'>
                              <label>Phone number</label>
                              <input
                                  type='text'
                                  placeholder="phone number"
                                  name='companyPhoneNumber'
                                  value={userData.companyPhoneNumber}
                                  onChange={handleInputChange}
                              />
                          {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.companyPhoneNumber}</p> : null }
                          </div>
                          <div className='inputPart'>
                              <label>Email</label>
                              <input
                                  type='text'
                                  placeholder="email"
                                  name='companyEmail'
                                  value={userData.companyEmail}
                                  onChange={handleInputChange}
                              />
                          {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.companyEmail}</p> : null }
                          </div>
                    </div>
                    
                    <div className='signupInputReal'>
                      <div className='inputPart'>
                              <label>Password</label>
                              <div className='companySignupPasswordInput'>
                                <input
                                    type='password'
                                    placeholder="password"
                                    name='companyPassword'
                                    value={userData.companyPassword}
                                    onChange={handleInputChange}
                                    // ref={loginInput}
                                />
                                <div className='passwordInputIcon'>
                                  {                
                                    seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                                  <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                                  }
                                </div>
                              </div>
                            {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.companyPassword}</p> : <p style={{fontSize: "10px", position: "absolute", bottom: "-28px"}}>should contain at least 9 alphabets, 2 special character and 2 numbers</p> }
                          </div>
                          <div className='inputPart'>
                              <label>Confirm Password</label>
                              <div className='companySignupPasswordInput'>
                                <input
                                    type='password'
                                    placeholder="confirm password"
                                    name='confirmCompanyPassword'
                                    value={userData.confirmCompanyPassword}
                                    onChange={handleInputChange}
                                    // ref={loginInput}
                                />
                                <div className='passwordInputIcon'>
                                  {                
                                    seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                                  <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                                  }
                                </div>
                              </div>
                          {formErrors ? <p style={{color: "red", fontSize: "12px", position: "absolute", bottom: "-20px"}}>{formErrors.confirmCompanyPassword}</p> : null }
                          </div>
                    </div>
    
                    
                </div>
                <button className='CompanysignupButton' onClick={handleCreateAccount}>Create Account</button>
                <p className='linkToLoginPage'>Already have an Account? <Link to='/companylogin' className='loginLink'>Login</Link></p>
            </div>
            {/* <PulseLoader color="hsla(168, 67%, 53%, 1)" size={0}/> */}
        </div>
    
    </>
  )
}

export default Companysignup
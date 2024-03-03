import React, { useRef, useState } from 'react'
import '../pagesCss/Companysignup.css'
// import Signupimg from '../images/Signupimg.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
// import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const CustomerSignup = () => {

    
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
    userFirstName: "",
    userLastName: "",
    userPhoneNumber: "",
    userEmail: "",
    userPassword: "",
    confirmUserPassword: "",
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    // console.log(userData)
}
// const handleCreateAccount = ()=>{
//     navigate("/companydashboard");
// }


  const theData = {userFirstName:userData.userFirstName, userLastName: userData.userLastName, userPhoneNumber: userData.userPhoneNumber, userEmail: userData.userEmail, userPassword: userData.userPassword, confirmUserPassword: userData.confirmUserPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/signUp"


  const handleCreateAccount = async(e)=>{
    
    e.preventDefault();
    setFormErrors(validate(userData));
    // console.log(formErrors)

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

  const validate = (values)=>{
    const errors = {};
    const corremail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const correname = /^[a-z ,.'-]+$/i
    // console.log(values.confirmPassword)
    if ( !values.userFirstName ) {
      errors.userFirstName = "first name is required!"
    }
    if ( !values.userLastName ) {
      errors.userLastName = "last name is required!"
    }
    if ( !values.userEmail ) {
      errors.userEmail = "email is required!"
    } else if (!corremail.test(values.userEmail)) {
      errors.userEmail = "This is not a valid email format!"
    }
    if ( !values.userPhoneNumber ) {
      errors.userPhoneNumber = "phone number is required!"
    }
    if ( !values.userPassword ) {
      errors.userPassword = "password is required!"
    } else if ( values.userPassword.length < 7) {
        errors.userPassword = "password should not be less than 7 characters!"
      }
    if ( !values.confirmUserPassword ) {
      errors.confirmUserPassword = "must confirm password"
    } else if(values.confirmUserPassword === values.userPassword) {
        errors.confirmUserPassword = ""
    }else{ 
        errors.confirmUserPassword = "the password must  match "
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
                <p>Create your account now</p>
                <div className='formPart'>
                    <div className='nameinputPart'>
                        <label>First Name</label>
                        <input
                            placeholder="first name"
                            name='userFirstName'
                            value={userData.userFirstName}
                            onChange={handleInputChange}
                        />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.userFirstName}</p> : null } */}
                    </div>
                        <div className='inputPart'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                placeholder="last name"
                                name='userLastName'
                                value={userData.userLastName}
                                onChange={handleInputChange}
                            />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.userLastName}</p> : null } */}
                        </div>
                        <div className='inputPart'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                placeholder="phone number"
                                name='userPhoneNumber'
                                value={userData.userPhoneNumber}
                                onChange={handleInputChange}
                            />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.userPhoneNumber}</p> : null } */}
                        </div>
                        <div className='inputPart'>
                            <label>Email</label>
                            <input
                                type='text'
                                placeholder="email"
                                name='userEmail'
                                value={userData.userEmail}
                                onChange={handleInputChange}
                            />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.userEmail}</p> : null } */}
                        </div>
                    
                        <div className='inputPart'>
                            <label>Password</label>
                            <div className='companySignupPasswordInput'>
                              <input
                                  type='password'
                                  placeholder="password"
                                  name='userPassword'
                                  value={userData.userPassword}
                                  onChange={handleInputChange}
                                  ref={loginInput}
                              />
                              <div className='passwordInputIcon'>
                                {                
                                  seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                                <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                                }
                              </div>
                            </div>
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.userPassword}</p> : null } */}
                        </div>
                        <div className='inputPart'>
                            <label>Confirm Password</label>
                            <div className='companySignupPasswordInput'>
                              <input
                                  type='password'
                                  placeholder="confirm password"
                                  name='confirmUserPassword'
                                  value={userData.confirmUserPassword}
                                  onChange={handleInputChange}
                                  ref={loginInput}
                              />
                              <div className='passwordInputIcon'>
                                {                
                                  seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                                <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                                }
                              </div>
                            </div>
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.confirmUserPassword}</p> : null } */}
                        </div>
    
                    
                </div>
                <button className='CompanysignupButton' onClick={handleCreateAccount}>Create Account</button>
                <p className='linkToLoginPage'>Already have an Account? <Link to='/login' className='loginLink'>Login</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default CustomerSignup
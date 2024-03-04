import React, { useRef, useState } from 'react'
import '../pagesCss/Companysignup.css'
// import Signupimg from '../images/Signupimg.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
// import Swal from 'sweetalert2'
import trackitLogo from '../images/trackitLogo.png'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

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
    if ( !values.CompanyName ) {
      errors.CompanyName = "company name is required!"
    }
    if ( !values.CompanyAddress ) {
      errors.CompanyAddress = "company address is required!"
    }
    if ( !values.Email ) {
      errors.Email = "email is required!"
    } else if (!corremail.test(values.Email)) {
      errors.Email = "This is not a valid email format!"
    }
    if ( !values.Telephone ) {
      errors.Telephone = "phone number is required!"
    }
    if ( !values.Password ) {
      errors.Password = "password is required!"
    } else if ( values.Password.length < 7) {
        errors.Password = "password should not be less than 7 characters!"
      }
    if ( !values.confirmPassword ) {
      errors.confirmPassword = "must confirm password"
    } else if(values.confirmPassword === values.password) {
        errors.confirmPassword = ""
    }else{ 
        errors.confirmPassword = "the password must  match "
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
                <div className='formPart'>
                    <div className='nameinputPart'>
                        <label>Company's name</label>
                        <input
                            placeholder="company's name"
                            name='companyName'
                            value={userData.companyName}
                            onChange={handleInputChange}
                        />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
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
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyAddress}</p> : null } */}
                        </div>
                        <div className='inputPart'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                placeholder="phone number"
                                name='companyPhoneNumber'
                                value={userData.companyPhoneNumber}
                                onChange={handleInputChange}
                            />
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Telephone}</p> : null } */}
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
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Email}</p> : null } */}
                        </div>
                    
                        <div className='inputPart'>
                            <label>Password</label>
                            <div className='companySignupPasswordInput'>
                              <input
                                  type='password'
                                  placeholder="password"
                                  name='companyPassword'
                                  value={userData.companyPassword}
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
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Password}</p> : null } */}
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
                                  ref={loginInput}
                              />
                              <div className='passwordInputIcon'>
                                {                
                                  seePassword ? <LuEyeOff style={{cursor: "pointer"}} onClick={handleNotSeePassword}/> :
                                                <LuEye style={{cursor: "pointer"}} onClick={handleSeePassword}/>
                                }
                              </div>
                            </div>
                        {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.confirmPassword}</p> : null } */}
                        </div>
    
                    
                </div>
                <button className='CompanysignupButton' onClick={handleCreateAccount}>Create Account</button>
                <p className='linkToLoginPage'>Already have an Account? <Link to='/companylogin' className='loginLink'>Login</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default Companysignup
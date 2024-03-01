import React, { useState } from 'react'
import '../pagesCss/Companysignup.css'
import Signupimg from '../images/Signupimg.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'

const Companysignup = () => {

    
    const navigate = useNavigate();

    



    const [formErrors, setFormErrors]  = useState()
  console.log(formErrors)

//   const handleImageChange = (e)=>{
//      setProfileImage(URL.createObjectURL(e.target.files[0]))
//   }

  const [userData, setUserData] = useState({
    CompanyName: "",
    CompanyAddress: "",
    Telephone: "",
    Email: "",
    Password: ""
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    // console.log(userData)
}
// const handleCreateAccount = ()=>{
//     navigate("/companydashboard");
// }


//   const theData = {firstname:userData.firstName, lastname: userData.lastName, phoneNumber: userData.phoneNumber, email: userData.email, userPassword: userData.password, confirmPassword: userData.confirmPassword, transactionPin: userData.pin}
//     const url = "https://flipcash-banking.onrender.com/api/v1/user/sign-up"


  const handleCreateAccount = async(e)=>{
    
    e.preventDefault();
    setFormErrors(validate(userData));
    // console.log(formErrors)

    //   try{
    //       const response = await axios.post(url, theData)
    //       console.log(response)
    //       localStorage.setItem("userToken", response.data.token)
          
    //       Swal.fire({
    //         title: "Success!",
    //         text: response.data.message,
    //         icon: "success",
    //         confirmButtonText: "ok",
    //       }).then(function() {
    //              window.location.href = "/dashboard";
    //           }) 
    //   }
    //   catch(err){
    //     Swal.fire({
    //       title: "error!",
    //       text: err.response.message,
    //       icon: "error",
    //       confirmButtonText: "ok",
    //       }) 
    //       console.log(err)
    //   }
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
    // if ( !values.confirmPassword ) {
    //   errors.confirmPassword = "must confirm password"
    // } else if(values.confirmPassword === values.password) {
    //     errors.confirmPassword = ""
    // }else{ 
    //     errors.confirmPassword = "the password must  match "
    // }

    return errors;
    
  }


  return (
    <>
    
        <div className='Companysignup'>
            <div className='Companysignupimg'>
                <img src={Signupimg} alt=''/>
            </div>
            <div className='signupContainer'>
                <h1>Sign Up</h1>
                <p>Create your account now</p>
                <div className='formPart'>
                    <div className='nameinputPart'>
                        <label>Company's name</label>
                        <input
                            placeholder="company's name"
                            name='CompanyName'
                            value={userData.CompanyName}
                            onChange={handleInputChange}
                        />
                        {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null }
                    </div>
                        <div className='inputPart'>
                            <label>Company's Address</label>
                            <input
                                type='text'
                                placeholder="company address"
                                name='CompanyAddress'
                                value={userData.CompanyAddress}
                                onChange={handleInputChange}
                            />
                        {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyAddress}</p> : null }
                        </div>
                        <div className='inputPart'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                placeholder="phone number"
                                name='Telephone'
                                value={userData.Telephone}
                                onChange={handleInputChange}
                            />
                        {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Telephone}</p> : null }
                        </div>
                        <div className='inputPart'>
                            <label>Email</label>
                            <input
                                type='text'
                                placeholder="email"
                                name='Email'
                                value={userData.Email}
                                onChange={handleInputChange}
                            />
                        {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Email}</p> : null }
                        </div>
                    
                        <div className='inputPart'>
                            <label>Password</label>
                            <input
                                type='text'
                                placeholder="password"
                                name='Password'
                                value={userData.Password}
                                onChange={handleInputChange}
                            />
                        {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.Password}</p> : null }
                        </div>
    
                    
                </div>
                <button className='CompanysignupButton' onClick={handleCreateAccount}>Create Account</button>
                <p className='linkToLoginPage'>Already have an Account?<Link to='/login' className='loginLink'>Login</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default Companysignup
import React, { useContext, useState } from 'react'
import './companyDashboardCss/createRider.css'
import { Thecontext } from '../../../App'
import axios from 'axios'
import Swal from 'sweetalert2'
import { PulseLoader } from "react-spinners"




const CreateRider = () => {

    const {setShowCreateRider,companyToken} = useContext(Thecontext)

    const [isLoading, setIsLoading] = useState(false)


    // const handleImageChange = (e)=>{
    //     setRiderProfileImage(URL.createObjectURL(e.target.files[0]))
    //  }


     const [formErrors, setFormErrors]  = useState()

     const [userData, setUserData] = useState({
        riderFirstName: "",
        riderLastName: "",
        riderAddress: "",
        riderPhoneNumber: "",
        riderEmail: "",
        riderPassword: "",
        confirmRiderPassword: "",
      })
    
      const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
        // console.log(userData)
    }


    const theData = {riderFirstName:userData.riderFirstName,riderLastName: userData.riderLastName, riderAddress: userData.riderAddress, riderPhoneNumber: userData.riderPhoneNumber, riderEmail: userData.riderEmail, riderPassword: userData.riderPassword, confirmRiderPassword: userData.confirmRiderPassword}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/rider/SignUp"


  const handleCreateRider = async(e)=>{
    
    e.preventDefault();
    setFormErrors(validate(userData));
    // console.log(formErrors)
    setShowCreateRider(false)

      try{
        setIsLoading(true)
          const response = await axios.post(url, theData, {
            headers: {
              "Authorization" : `Bearer ${companyToken}`
           }})
          console.log(response)
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
            }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.error,
          icon: "error",
          confirmButtonText: "ok",
          }) 
          console.log(err)
      }
      setIsLoading(false)
      setShowCreateRider(false)
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
    if ( !values.companyEmail ) {
      errors.companyEmail = "email is required!"
    } else if (!corremail.test(values.companyEmail)) {
      errors.companyEmail = "This is not a valid email format!"
    }
    if ( !values.companyPhoneNumber ) {
      errors.companyPhoneNumber = "phone number is required!"
    }
    if ( !values.Password ) {
      errors.Password = "password is required!"
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
    
        <div className='CreateRider'>
            <div className='creatingRiderPart'>
                <div className='creatingRiderPartTop'>
                    <div className='creatingRiderTopText'><h1>Sign up a Rider</h1></div>
                    <button className='creatingRiderTopBtn' onClick={()=>setShowCreateRider(false)}>x</button>
                </div>
                <div className='creatingRiderPartLine'></div>
                {/* <div className='creatingRiderImagePart'>
                    <div className='creatingRiderImageCircle'>
                       <img src={riderProfileImage} alt=''/>
                    </div>
                    <div className='creatingRiderImageBtnPart'>
                        <input type="file" hidden id='creatingRiderImage'/>
                        <label className='creatingRiderImageBtn' htmlFor='creatingRiderImage' onChange={handleImageChange}>Add Image</label>
                    </div>
                </div> */}
                <div className='creatingRiderPartInputPart'>
                    <div className='creatingRiderInputReal'>
                        <div className='creatingRiderInputPartInput'>
                            <label>First Name</label>
                            <input 
                                type="text"
                                placeholder='first name' 
                                name='riderFirstName'
                                value={userData.riderFirstName}
                                onChange={handleInputChange}
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                        <div className='creatingRiderInputPartInput'>
                            <label>Last Name</label>
                            <input 
                                type="text"
                                placeholder='last name'
                                name='riderLastName'
                                value={userData.riderLastName}
                                onChange={handleInputChange} 
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                    </div>
                    <div className='creatingRiderInputReal'>
                        <div className='creatingRiderInputPartInput'>
                            <label>Phone Number</label>
                            <input 
                                type="text"
                                placeholder='phone number'
                                name='riderPhoneNumber'
                                value={userData.riderPhoneNumber}
                                onChange={handleInputChange}
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                        <div className='creatingRiderInputPartInput'>
                            <label>Email</label>
                            <input 
                                type="text"
                                placeholder='email address' 
                                name='riderEmail'
                                value={userData.riderEmail}
                                onChange={handleInputChange} 
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                    </div>
                    <div className='creatingRiderInputReal'>
                        <div className='creatingRiderInputPartInput'>
                            <label>Password</label>
                            <input 
                                type="text"
                                placeholder='password'
                                name='riderPassword'
                                value={userData.riderPassword}
                                onChange={handleInputChange} 
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                            <p style={{fontSize: "12px"}}>password must be 6 number</p>
                        </div>
                        <div className='creatingRiderInputPartInput'>
                            <label>Confirm Password</label>
                            <input 
                                type="text"
                                placeholder='confirm password' 
                                name='confirmRiderPassword'
                                value={userData.confirmRiderPassword}
                                onChange={handleInputChange}
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                    </div>
                    <div className='creatingRiderInputReal'>
                        <div className='creatingRiderInputPartInput'>
                            <label>Address</label>
                            <input 
                                type="text"
                                placeholder='address'
                                name='riderAddress'
                                value={userData.riderAddress}
                                onChange={handleInputChange} 
                            />
                            {/* {formErrors ? <p style={{color: "red", fontSize: "12px"}}>{formErrors.CompanyName}</p> : null } */}
                        </div>
                    </div>
                </div>
                <button className='creatingRiderBtn' disabled= {isLoading} onClick={handleCreateRider}>{isLoading ? <PulseLoader color="white"/> : "Create Rider" }</button>
            </div>
        </div>
    
    </>

  )
}

export default CreateRider
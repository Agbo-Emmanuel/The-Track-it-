import React from 'react'
import '../pagesCss/Companysignup.css'

const Companysignup = () => {
  return (
    <>
    
        <div className='Companysignup'>
            <div className='Companysignupimg'></div>
            <div className='signupContainer'>
                <h1>Sign Up</h1>
                <p>Create your account now</p>
                <div className='formPart'>
                    <div className='inputPart'>
                        <label>Company's name</label>
                        <input
                            placeholder="enter company's name"
                        />
                    </div>
                    <div className='inputPart'>
                        <label>Phone number</label>
                        <input
                            placeholder="enter phone number"
                        />
                    </div>
                    <div className='inputPart'>
                        <label>Email</label>
                        <input
                            placeholder="enter email"
                        />
                    </div>
                    <div className='inputPart'>
                        <label>Password</label>
                        <input
                            placeholder="enter password"
                        />
                    </div>
                </div>
                <button className='CompanysignupButton'>Create Account</button>
            </div>
        </div>
    
    </>
  )
}

export default Companysignup
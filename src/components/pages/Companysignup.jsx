import React from 'react'
import '../pagesCss/Companysignup.css'
import Signupimg from '../images/Signupimg.svg'
import { Link } from 'react-router-dom'

const Companysignup = () => {
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
                        />
                    </div>
                    <div className='twoInputJoin'>
                        <div className='inputPart'>
                            <label>Phone number</label>
                            <input
                                placeholder="phone number"
                            />
                        </div>
                        <div className='inputPart'>
                            <label>Email</label>
                            <input
                                placeholder="email"
                            />
                        </div>
                    </div>
                    <div className='twoInputJoin'>
                        <div className='inputPart'>
                            <label>Password</label>
                            <input
                                placeholder="password"
                            />
                        </div>
                        <div className='inputPart'>
                            <label>Confirm password</label>
                            <input
                                placeholder="password"
                            />
                        </div>
                    </div>
                    
                </div>
                <button className='CompanysignupButton'>Create Account</button>
                <p className='linkToLoginPage'>Already have an Account?<Link to='/login' className='loginLink'>Login</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default Companysignup
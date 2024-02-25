import React from 'react'
import '../pagesCss/verifyEmail.css'
import trackitLogo from '../images/trackitLogo.png'

const VerifyEmail = () => {

  return (

    <>
    
        <div className='verifyEmail'>
           <div className='verifyEmailPart'>
                <div className='verifyTrackLogo'>
                    <img src={trackitLogo} alt=''/>
                </div>
                <h1>Verify your email</h1>
                <h5>Enter the 6 digit code sent to your email to verify </h5>
                <div className='verifyBoxPart'>
                    <input className='verifyBox' max='1'/>
                    <input className='verifyBox'/>
                    <input className='verifyBox'/>
                    <input className='verifyBox'/>
                    <input className='verifyBox'/>
                    <input className='verifyBox'/>
                </div>
                <div className='theVerifyPart'>
                    <div className='resendEMaill'>Resend email</div>
                    <button className='verifyButton'>Verify</button>
                </div>
           </div>
        </div>
    
    </>

  )
}

export default VerifyEmail
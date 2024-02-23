import React from 'react'
import '../pagesCss/Track.css'
import { Link, useNavigate } from 'react-router-dom'
import trackitLogo from '../images/trackitLogo.png'
import facebookimg from '../images/facebookimg.png'
import twitterimg from '../images/twitterimg.png'
import instagramimg from '../images/instagramimg.png'


const Track = () => {

  const navigate = useNavigate();

  const handleTrack = ()=>{
    navigate("/usermap");
  }

  return (
    <>
    
      <div className='tractPage'>
        <div className='trackpageTrack'> 
          <h1>Enter Tracking ID</h1>
          <div className='trackpart'>
            <input/>
            <button className='trackPageTrackBtn' onClick={handleTrack}>Track</button>
          </div>
        </div>
      </div>

      <footer className='tractPageFooter'>
            <div className='tractPageFooterTop'>
                <h5>Get started with Track it.</h5>
                <p>We’re here to help you track your goods<br/> nation wide. </p>
            </div>
              <div className='tractPageFooterCenter'>
                <div className='tractPageFooterCenterLogo'>
                    <img src={trackitLogo} alt=''/>
                </div>
                <div className='tractPageFooterCenterText'>
                    <div className='tractPageFooterCompany'>
                        <Link className='tractPageFooterLink'>About us</Link>
                        <Link className='tractPageFooterLink'>Contact us</Link>
                        <Link className='tractPageFooterLink'>Tracking</Link>
                    </div>
                    <div className='tractPageFooterSocialMedia'>
                        <h6>Social Media</h6>
                        <div className='socialMediaImg'>
                            <div className='facebook'><img src={facebookimg} alt=''/></div>
                            <div className='twitter'><img src={twitterimg} alt=''/></div>
                            <div className='instagram'><img src={instagramimg} alt=''/></div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className='tractPageFooterBottom'>
                <div className='tractPageFooterLine'></div>
                <p>©2024 Track it | All rights reserved</p>
              </div>
          </footer>
    
    </>
  )
}

export default Track
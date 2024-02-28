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
    
    </>
  )
}

export default Track
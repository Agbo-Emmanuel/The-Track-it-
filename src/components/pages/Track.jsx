import React from 'react'
import '../pagesCss/Track.css'
import {  useNavigate } from 'react-router-dom'


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
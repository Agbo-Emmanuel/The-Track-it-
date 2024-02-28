import React from 'react'
import '../pagesCss/About.css'




const About = () => {


  return (
    
    <>
    
      <div className='AboutPage'>
        <div className='aboutHeroSection'>
          <h1>About Us</h1>
          <p>Welcome to our tracking application! Our team is dedicated to<br/> providing you with the most accurate and reliable tracking<br/> services available.</p>
        </div>
        <div className='aboutpageintro'>
          <h1>About Us</h1>
          <div className='aboutpageintrounderline'></div>
        </div>
        <div className='aboutPageTrackingProductSection'>
          <div className='aboutPageTrackingProductSectionText'>
            <h2>Tracking your product with Successful Delivery</h2>
            <div className='aboutPageLine'></div>
            <p>Our company was founded with the goal of making it easy for individuals and businesses to keep track of their assets and valuables. We believe that by providing a user-friendly and efficient tracking solution, we can help our customers save time, money, and stress.</p>
          </div>
          <div className='aboutPageTrackingProductSectionImg'></div>
        </div>
        <div className='aboutPageGoalsMissionSection'>
          <div className='aboutPageGoalsMissionSectionText'>
            <h2>Our Goals and Mission</h2>
            <div className='aboutPageLine'></div>
            <p>Our mission is to empower individuals and organizations to take control of their time and resources through innovative tracking solutions. We believe that by providing a powerful and user-friendly tracking application, we can help our customers achieve their goals, increase productivity, and make the most of every day.</p>
          </div>
          <div className='aboutPageGoalsMissionSectionImg'></div>
        </div>
        <div className='aboutPageVisionSection'>
          <div className='aboutPageVisionSectionText'>
            <h2>Our Vision</h2>
            <div className='aboutPageLine'></div>
            <p>Our vision is to be the leading provider of tracking solutions, empowering individuals and organizations around the world to take control of their time and resources. We strive to be at the forefront of innovation in the tracking industry, constantly pushing the boundaries of what is possible with our technology.</p>
          </div>
          <div className='aboutPageVisionSectionImg'></div>
        </div>
      </div>
    
    </>
  )
}

export default About
import React, { useState } from 'react'
import '../pagesCss/Landingpage.css'
import heroSectionImg from '../images/heroSectionImg.png'
import landingpageimg2 from '../images/landingpageimg2.png'
import landingpageimg3 from '../images/landingpageimg3.png'
import landingpageimg4 from '../images/landingpageimg4.png'
import topleftsection4vector from '../images/topleftsection4vector.png'
import bottomleftsection4vector from '../images/bottomleftsection4vector.png'
import toprightsection4vector from '../images/toprightsection4vector.png'
import bottomrightsection4vector from '../images/bottomrightsection4vector.png'
import check from '../images/check.png'
import { Link, NavLink } from 'react-router-dom'
import trackitLogo from '../images/trackitLogo.png'
import facebookimg from '../images/facebookimg.png'
import twitterimg from '../images/twitterimg.png'
import instagramimg from '../images/instagramimg.png'
import buggerMenu from '../images/buggerMenu.svg'



const Landingpage = () => {

    const [menuBar, setMenuBar] = useState(false)

    const handleMenuBar = ()=>{
        setMenuBar(!menuBar)
    }

  return (

    <div className='Landingpage'>

        {
            menuBar ?   <div className='landingPageMenuBar'>
                            <div className='landingPageMenuBarMenu'>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Home</NavLink>
                                <NavLink to='/track'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Track</NavLink>
                                <NavLink to='about'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>About</NavLink>
                            </div>
                        </div> : null
        }
        <header className='landingHeader'>
            <div className='landingHeaderHolder'>
                <div className='leftHeader'>
                    <img src={trackitLogo} alt=''/>
                </div>
                <div className='rightHeader'>
                    <div className='headerNavMenu'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'notactive'}>Home</NavLink>
                        <NavLink to='/track'className={({ isActive }) => isActive ? 'active' : 'notactive'}>Track</NavLink>
                        <NavLink to='about'className={({ isActive }) => isActive ? 'active' : 'notactive'}>About</NavLink>
                    </div>
                    <NavLink to='/companysignup' className='getStartedButton'>Get Started</NavLink>
                </div>
                <div className='buggerMenu' onClick={handleMenuBar}><img src={buggerMenu} alt=''/></div>
            </div>
        </header>
        <div className='heroSection'>
            <div className='heroSectionLeft'>
                <div className='heroText'>
                    <h1>Your <span>Product</span> Our Priority</h1>
                    <h6>Track it protects you from getting scammed. Ensuring that you can track your product with your mobile device.</h6>
                </div>
                <NavLink to='/companysignup' className='heroSectionButton'>Get Started</NavLink>
            </div>
            <div className='heroSectionRight'>
                <div className='heroSectionImg'>
                    <img src= {heroSectionImg} alt=''/>
                </div>
            </div>
        </div>
        <div className='section2'>
            <div className="section2Left"> 
                <img src={landingpageimg2} alt=''/>
            </div>
            <div className="section2Right">
                <p>Keep Track of your product to<br/> ensure safe delivery</p>
            </div>
        </div>
        <div className='section3'>
            <div className="section3Left"> 
                <img src={landingpageimg3} alt=''/>
            </div>
            <div className="section3Right">
                <div className="section3Text">
                    <h1>Connect easily</h1>
                    <p>The Track it <span>Destination</span> feature makes communication easy. 
                        Get updated about the status of your package’s Location.
                    </p>
                </div>
            </div>
        </div>
        <div className="section4">
            <div className='section4Left'>
                <div className='section4LeftTop'><img src={topleftsection4vector} alt=''/></div>
                <div className='section4LeftBottom'><img src={bottomleftsection4vector} alt=''/></div>
            </div>
            <div className='section4Center'>
                <h1>Your package is delivered fast when you<br/> use Track it</h1>
                <NavLink to='/companysignup' className='section4Button'>Get Started</NavLink>
                <div className='packagewriteup'>
                    <div className='fastsecure'>
                        <div className='check'><img src={check} alt=''/></div>
                        <p>Fast & secure</p>
                    </div>
                    <div className='watchpackage'>
                        <div className='check'><img src={check} alt=''/></div>
                        <p>Watch your package get delivered safely</p>
                    </div>
                </div>
            </div>
            <div className='section4Right'>
                <div className='section4RightTop'><img src={toprightsection4vector} alt=''/></div>
                <div className='section4RightBottom'><img src={bottomrightsection4vector} alt=''/></div>
            </div>
        </div>
        <div className='section5'>
            <div className="section5Left"> 
                <img src={landingpageimg4} alt=''/>
            </div>
            <div className="section5Right">
                <div className="section5Text">
                    <h1>Never get scammed</h1>
                    <p>It doesn’t matter where your package is being delivered from,<br/>
                        all you need to do is to track your package and make sure it’s been delivered to the right destination.
                    </p>
                </div>
            </div>
        </div>
        <footer className='landingFooter'>
            <div className='landingFooterTop'>
                <h5>Get started with Track it.</h5>
                <p>We’re here to help you track your goods<br/> nation wide. </p>
            </div>
            <div className='landingFooterCenter'>
                <div className='landingFooterCenterLogo'>
                    <img src={trackitLogo} alt=''/>
                </div>
                <div className='landingFooterCenterText'>
                    <div className='landingFooterCompany'>
                        <Link className='landingFooterLink'>About us</Link>
                        <Link className='landingFooterLink'>Contact us</Link>
                        <Link className='landingFooterLink'>Tracking</Link>
                    </div>
                    <div className='landingFooterSocialMedia'>
                        <h6>Social Media</h6>
                        <div className='socialMediaImg'>
                            <div className='facebook'><img src={facebookimg} alt=''/></div>
                            <div className='twitter'><img src={twitterimg} alt=''/></div>
                            <div className='instagram'><img src={instagramimg} alt=''/></div>
                        </div>
                    </div>
                    <NavLink to='/companysignup' className='landingFooterButton'>Get Started</NavLink>
                </div>
            </div>
            <div className='landingFooterBottom'>
                <div className='landingFooterLine'></div>
                <p>©2024 Track it | All rights reserved</p>
            </div>
        </footer>

    </div>

  )
}

export default Landingpage
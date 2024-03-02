import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import '../pagesCss/Landing.css'
import trackitLogo from '../images/trackitLogo.png'
import buggerMenu from '../images/buggerMenu.svg'
import facebookimg from '../images/facebookimg.png'
import twitterimg from '../images/twitterimg.png'
import instagramimg from '../images/instagramimg.png'


const Landing = () => {

    const [landingMenu, setLandingMenu] = useState(false)

    const handleLandingMenu = ()=>{
        setLandingMenu(!landingMenu)
    }
    const handleCloseMenu = ()=>{
        setLandingMenu(false)
    }

  return (
    <>

        {
            landingMenu ?   <div className='landingMenuBar'>
                                <div className='landingMenuBarMenu'>
                                    <div className='closeMenuBar' onClick={handleCloseMenu}>x</div>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>Home</NavLink>
                                    <NavLink to='/track'className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>Track</NavLink>
                                    <NavLink to='about'className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>About</NavLink>
                                    <div className='menuSignup'>Sign in</div>
                                </div>
                            </div>  
                            
                        :   <div style={{width: "100%", height: "auto"}}>

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
                                    <div className='buggerMenu' onClick={handleLandingMenu}><img src={buggerMenu} alt=''/></div>
                                </div>
                            </header>
            
                        <Outlet/>
            
                        <footer className='landingFooter'>
                            <div className='landingFooterTop'>
                                <h5>Get started with Track it.</h5>
                                <p>We’re here to help you track your goods<br/> nation wide. </p>
                            </div>
                            <div className='landingFooterCenter'>
                                <div className='landingFooterCenterLogo'>
                                    <NavLink to='/companysignup' className='landingPageFooterButton'>Get Started</NavLink>
                                    <div className='landingFooterCenterLogoimg'><img src={trackitLogo} alt=''/></div>
                                </div>
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
                            </div>
                            <div className='landingFooterBottom'>
                                <div className='landingFooterLine'></div>
                                <p>©2024 Track it | All rights reserved</p>
                            </div>
                        </footer>
            
                    </div>
        }

        

    </>


  )
}

export default Landing
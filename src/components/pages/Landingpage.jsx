import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'animate.css';
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
import trackitLogo from '../images/trackitLogo.png'
import facebookimg from '../images/facebookimg.png'
import twitterimg from '../images/twitterimg.png'
import instagramimg from '../images/instagramimg.png'
import buggerMenu from '../images/buggerMenu.svg'



const Landingpage = () => {

    const [menuBar, setMenuBar] = useState(false)

    

    const handleCloseMenu = ()=>{
        setMenuBar(false)
    }

  return (

    <>

        {
            menuBar ?  <div className='landingMenuBar'>
                            <div className='landingMenuBarMenu'>
                                <div className='landingPagecloseMenuBar' onClick={handleCloseMenu}>x</div>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Home</NavLink>
                                <NavLink to='/track'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Track</NavLink>
                                <NavLink to='about'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>About</NavLink>
                                <div className='landingPagemenuSignup'>Sign in</div>
                            </div>
                        </div> 

                    :   <div className='Landingpage'>
                    
                    <div className='heroSection'>
                        <div className='heroSectionLeft'>
                            <div className='heroText'>
                                <h1>Your <span>Product</span> Our Priority</h1>
                                <h6>Track it protects you from getting scammed.<br></br> 
                                    Ensuring that you can track your product with your<br></br> 
                                    mobile device.Track on the go and monitor your<br></br> Product anywhere, anytime
                                </h6>
                            </div>
                            <NavLink to='/companysignup' className='heroSectionButton'>Get Started</NavLink>
                        </div>
                        <div className='heroSectionRight'>
                            <img src= {heroSectionImg} alt=''/>
                        </div>
                    </div>
                    <h1 className='landingPageH1'>Welcome to Track it</h1>
                    <div className='section2'>
                        <div className="section2Left"> 
                            <img src={landingpageimg2} alt=''/>
                        </div>
                        <div className="section2Right">
                            <div className='section2RightContentFirst'>
                                <div className='section2RightContentLeft'><div className='section2RightContentLeftCircleFirst'></div></div>
                                <div className='section2RightContentRight'>
                                    Do you need to keep track of important<br></br> 
                                    items or people on the go?Our tracking<br></br>
                                    application is the perfect solution for you.
                                </div>
                            </div>
                            <div className='section2RightContentSecond'>
                                <div className='section2RightContentLeft'><div className='section2RightContentLeftCircleSecond'></div></div>
                                <div className='section2RightContentRight'>
                                    With our easy-to-use app, you can monitor <br></br> 
                                    the location of your valued items or loved<br></br>
                                    ones in real-time, giving you peace of<br></br>
                                    mind and control over your belongings.
                                </div>
                            </div>
                            <div className='section2RightContentThird'>
                                <div className='section2RightContentLeft'><div className='section2RightContentLeftCircleThird'></div></div>
                                <div className='section2RightContentRight'>
                                    With our easy-to-use app, you can monitor <br></br> 
                                    the location of your valued items or loved <br></br>
                                    ones in real-time, giving you peace of <br></br>
                                    mind and control over your belongings.
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className='landingPageH2'>Our tracking application offers the <p>following features</p></h1>
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
                        </div>s
                    </div>
                    
            
                </div>
        }
    
    
    </>

  )
}

export default Landingpage
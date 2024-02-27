import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../pagesCss/Landing.css'
import trackitLogo from '../images/trackitLogo.png'
import buggerMenu from '../images/buggerMenu.svg'


const Landing = () => {

    const [landingMenu, setLandingMenu] = useState(false)

    const handleLandingMenu = ()=>{
        setLandingMenu(!landingMenu)
    }

  return (

    <div style={{width: "100%", height: "auto", position: "relative"}}>

        {
            landingMenu ?   <div className='landingMenuBar'>
                                <div className='landingMenuBarMenu'>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>Home</NavLink>
                                    <NavLink to='/track'className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>Track</NavLink>
                                    <NavLink to='about'className={({ isActive }) => isActive ? 'landingmenuactive' : 'landingmenunotactive'}>About</NavLink>
                                </div>
                            </div>  : null
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
                </div>
                <div className='buggerMenu' onClick={handleLandingMenu}><img src={buggerMenu} alt=''/></div>
            </div>
        </header>
        <div>
            <NavLink to='/' className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Home</NavLink>
            <NavLink to='/track'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Track</NavLink>
            <NavLink to='about'className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>About</NavLink>
        </div>

        <Outlet/>

    </div>

  )
}

export default Landing
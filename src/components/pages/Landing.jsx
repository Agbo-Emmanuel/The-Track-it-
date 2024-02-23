import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../pagesCss/Landing.css'
import trackitLogo from '../images/trackitLogo.png'


const Landing = () => {

  return (

    <div style={{width: "100%", height: "auto"}}>

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
            </div>
        </header>

        <Outlet/>

    </div>

  )
}

export default Landing
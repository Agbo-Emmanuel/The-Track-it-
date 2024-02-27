import React from 'react'
import '../companyDashBoard/companyDashboardCss/companyDashboard.css'
import trackitLogo from '../../images/trackitLogo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import dashboardimg from '../../images/dashboardimg.png'
import accountimg from '../../images/accountimg.png'
import logoutimg from '../../images/logoutimg.png'



const companyDashboard = () => {



  return (
   
    <>
    
      <div className='CompanyDashboard'>

        <div className='companyMenuBar'>
          <div className='companyMenuBarTop'>
            <div className='companyMenuTopLogo'><img src={trackitLogo} alt=''/></div>
          </div>
          <div className="companyMenuBarBody">
            <NavLink to='/companydashboard' className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <div className='comapanyMenuBarnavLogo'><img src={dashboardimg} alt=''/></div>
              <nav>Dashboard</nav>
            </NavLink>
            <NavLink to='/riders' className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <div className='comapanyMenuBarnavLogo'><img src={accountimg} alt=''/></div>
              <nav>Riders</nav>
            </NavLink>
          </div>
          <div className="companyMenuBarBottom">
            <div className='logOutImg'><img src={logoutimg} alt=''/></div>
            <Link to='/login' className='logOutLink'>Logout</Link>
          </div>
        </div>

        <div className='companyBody'>
          <div className='companyBodyTop'>
            <div className='companyBodyTopLeft'></div>
            <div className='companyBodyTopRight'></div>
          </div>
          <div className="companyBodyDown">
            <Outlet/>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default companyDashboard
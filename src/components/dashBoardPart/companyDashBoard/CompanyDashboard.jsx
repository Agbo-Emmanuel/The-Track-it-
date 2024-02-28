import React from 'react'
import '../companyDashBoard/companyDashboardCss/companyDashboard.css'
import trackitLogo from '../../images/trackitLogo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import dashboardimg from '../../images/dashboardimg.png'
import accountimg from '../../images/accountimg.png'
import logoutimg from '../../images/logoutimg.png'
import notificationimage from '../../images/notificationimage.png'
import packageimage from '../../images/packageimage.png'



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
            <NavLink to='/companyriders' className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <div className='comapanyMenuBarnavLogo'><img src={accountimg} alt=''/></div>
              <nav>Riders</nav>
            </NavLink>
            <NavLink to='/companypackages' className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <div className='comapanyMenuBarnavLogo'><img src={packageimage} alt=''/></div>
              <nav>Packages</nav>
            </NavLink>
          </div>
          <div className="companyMenuBarBottom">
            <div className='logOutImg'><img src={logoutimg} alt=''/></div>
            <Link to='/login' className='logOutLink'>Logout</Link>
          </div>
        </div>

        <div className='companyBody'>
          <div className='companyBodyTop'>
            <div className='companyBodyTopLeft'>
              <p>Welcome, Dangote</p>
            </div>
            <div className='companyBodyTopRight'>
              <div className='companyBodyTopNotification'>
                <img src={notificationimage} alt=''/>
                <div className='notifyDot'></div>
              </div>
              <div className='companyBodyTopRightProfile'>D</div>
            </div>
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
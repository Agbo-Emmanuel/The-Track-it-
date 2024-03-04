import React, { useContext } from 'react'
import './customerDashboardCss/customerDashboardPart.css'
import trackitLogo from '../../images/trackitLogo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import dashboardimg from '../../images/dashboardimg.png'
// import accountimg from '../../images/accountimg.png'
import logoutimg from '../../images/logoutimg.png'
import notificationimage from '../../images/notificationimage.png'
import packageimage from '../../images/packageimage.png'
import { Thecontext } from '../../../App'
import CustomerLogout from './CustomerLogout'






const CustomerDashboardPart = () => {


    const {
        showRiderLogout, setShowRiderLogout,
        riderProfileShow, setRiderProfileShow
      } = useContext(Thecontext)


  return (
    <>
        {
            showRiderLogout ? <CustomerLogout/> : null
        }

        {
            riderProfileShow ?   <div className='profileShow'>
                                <div className='profileShowProfile'>My Profile</div>
                                <button className='profileShowLogoutBtn' onClick={()=>setShowRiderLogout(true)}>Logout</button>
                            </div> : null
        } 
        <div className='RiderDashboardPart'>
            <div className='riderDashboardPartMenuBar'>
                <div className='riderDashboardPartMenuBarTop'>
                    <div className='riderDashboardPartMenuBarTopLogo'><img src={trackitLogo} alt=''/></div>
                </div>
                <div className="riderMenuBarBody">
                    <NavLink to='/customerdashboard' className={({ isActive }) => isActive ? 'riderisactive' : 'riderisnotactive'}>
                    <div className='riderMenuBarnavLogo'><img src={dashboardimg} alt=''/></div>
                    <nav>Dashboard</nav>
                    </NavLink>
                    {/* <NavLink to='/riderlocation' className={({ isActive }) => isActive ? 'riderisactive' : 'riderisnotactive'}>
                    <div className='riderMenuBarnavLogo'><img src={accountimg} alt=''/></div>
                    <nav>Location</nav>
                    </NavLink> */}
                    <NavLink to='/customerpackages' className={({ isActive }) => isActive ? 'riderisactive' : 'riderisnotactive'}>
                    <div className='riderMenuBarnavLogo'><img src={packageimage} alt=''/></div>
                    <nav>Packages</nav>
                    </NavLink>
                </div>
                <div className="riderMenuBarBottom">
                    <div className='logOutImg'><img src={logoutimg} alt=''/></div>
                    <Link className='logOutLink' onClick={()=>setShowRiderLogout(true)}>Logout</Link>
                </div>
            </div>

            <div className='riderBody'>
                <div className='riderBodyTop'>
                    <div className='riderBodyTopLeft'>
                        <p>Welcome, Lonie</p>
                    </div>
                    <div className='riderBodyTopRight'>
                        <div className='riderBodyTopNotification'>
                            <img src={notificationimage} alt=''/>
                            <div className='notifyDot'></div>
                        </div>
                        <div className='riderTopRightProfile' onClick={()=>setRiderProfileShow(!riderProfileShow)}>L</div>
                    </div>
                </div>
                <div className="riderBodyDown">
                    <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CustomerDashboardPart
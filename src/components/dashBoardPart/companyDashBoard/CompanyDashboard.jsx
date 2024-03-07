import React, { useContext } from 'react'
import '../companyDashBoard/companyDashboardCss/companyDashboard.css'
import trackitLogo from '../../images/trackitLogo.png'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import dashboardimg from '../../images/dashboardimg.png'
import accountimg from '../../images/accountimg.png'
import logoutimg from '../../images/logoutimg.png'
import buggerMenu from '../../images/buggerMenu.svg'
// import notificationimage from '../../images/notificationimage.png'
import packageimage from '../../images/packageimage.png'
import CreateRider from './CreateRider'
import { Thecontext } from '../../../App'
import CreatePackage from './CreatePackage'
import AssignPackage from './AssignPackage'
import CompanyLogout from './CompanyLogout'




const CompanyDashboard = () => {


  const navigate = useNavigate()

  const {
          showCreateRider,showCreatePackage,
          showCompanyLogout,setShowCompanyLogout,
          profileShow, setProfileShow,
          companyName,companyFirstLetter,
          showAssignPackage
        } = useContext(Thecontext)


  return (
   
    <>

      {
        showCompanyLogout ? <CompanyLogout/> : null
      }
      {
        showCreateRider ? <CreateRider/> : null
      }

      {
        showCreatePackage ? <CreatePackage/> : null
      }
      {
        showAssignPackage ? <AssignPackage/> : null
      }
      
    
      {
        profileShow ? <div className='profileShow'>
                        <button className='profileShowLogoutBtn' onClick={()=>setShowCompanyLogout(true)}>Logout</button>
                      </div> : null
      }
      <div className='CompanyDashboard'>

        <div className='companyMenuBar'>
          <div className='companyMenuBarTop'>
            <div className='companyMenuTopLogo' onClick={()=>navigate('/')}>
              <img src={trackitLogo} alt=''/>
            </div>
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
            <div className='logOutLink' onClick={()=>setShowCompanyLogout(true)}>Logout</div>
          </div>
        </div>

        <div className='companyBody'>
          <div className='companyBodyTop'>
            <div className='companyBodyTopLeft'>
              <p>Welcome, {companyName}</p>
            </div>
            <div className='companyBodyTopRight'>
              {/* <div className='companyBodyTopNotification'>
                <img src={notificationimage} alt=''/>
                <div className='notifyDot'></div>
              </div> */}
              <div className='companyBodyTopRightProfile' onClick={()=>setProfileShow(!profileShow)}>{companyFirstLetter}</div>
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

export default CompanyDashboard
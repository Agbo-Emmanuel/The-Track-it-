import React from 'react'
import '../companyDashBoard/companyDashboardCss/theCompanyDashboard.css'
import { useNavigate } from 'react-router-dom';



const TheCompanyDashBoard = () => {

  const navigate = useNavigate();

    const handleToRider = ()=>{
        navigate('/riders');
    }

    const handleToPackage = ()=>{
        navigate('/packages');
    }

  return (
    
    <>
    
        <div className='theCompanyDashboard'>
          <div className='theCompanyDashboardTop'>
            <div className='totalRiders'>
              <div className='totalRidersLeft' onClick={handleToRider}>
                <h3>Total Riders</h3>
                <h5>54</h5>
              </div>
              <div className='companyDashboardCreateRider'>
                <h5>Create Rider</h5>
              </div>
            </div>
            <div className='totalPackages'>
              <div className='totalPackagesLeft' onClick={handleToPackage}>
                <h3>Total Packages</h3>
                <h5>10</h5>
              </div>
              <div className='companyDashboardCreatePackage'>
                <h5>Create Package</h5>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default TheCompanyDashBoard
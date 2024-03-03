import React, { useContext } from 'react'
import '../companyDashBoard/companyDashboardCss/theCompanyDashboard.css'
import { useNavigate } from 'react-router-dom';
import { Thecontext } from '../../../App'




const TheCompanyDashBoard = () => {

  const {setShowCreateRider, setShowCreatePackage} = useContext(Thecontext)

  const navigate = useNavigate();

    const handleToRider = ()=>{
        navigate('/companyriders');
    }

    const handleToPackage = ()=>{
        navigate('/companypackages');
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
              <div className='companyDashboardCreateRider' onClick={()=>setShowCreateRider(true)}>
                <h5>Create Rider</h5>
              </div>
            </div>
            <div className='totalPackages'>
              <div className='totalPackagesLeft' onClick={handleToPackage}>
                <h3>Total Packages</h3>
                <h5>10</h5>
              </div>
              <div className='companyDashboardCreatePackage' onClick={()=>setShowCreatePackage(true)}>
                <h5>Assign Package</h5>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default TheCompanyDashBoard
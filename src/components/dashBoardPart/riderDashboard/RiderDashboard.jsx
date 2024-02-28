import React from 'react'
import './riderDashboardCss/riderDashboard.css'
import { useNavigate } from 'react-router-dom';


const RiderDashboard = () => {


    const navigate = useNavigate();

    const handleToRider = ()=>{
        navigate('/riderlocation');
    }

    const handleToPackage = ()=>{
        navigate('/riderpackages');
    }

  return (
    <>
    
        <div className='RiderDashboard'>
            <div className='riderDashboardTop'>
                <div className='ridertotalPackages'>
                    <div className='ridertotalPackagesLeft' onClick={handleToPackage}>
                        <h3>Total Packages</h3>
                        <h5>10</h5>
                    </div>
                </div>
                <div className='riderLocation'>
                    <div className='riderLocationLeft' onClick={handleToRider}>
                        <h3>Location</h3>
                        <h5>muyibi 167</h5>
                    </div>
                    <div className='riderDashboardUpdateLocation'>
                        <h5>UpdateLocation</h5>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RiderDashboard
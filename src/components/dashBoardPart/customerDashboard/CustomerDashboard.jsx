import React from 'react'
import './customerDashboardCss/customerDashboard.css'
import { useNavigate } from 'react-router-dom';


const CustomerDashboard = () => {


    const navigate = useNavigate();

    // const handleToRider = ()=>{
    //     navigate('/riderlocation');
    // }

    const handleToPackage = ()=>{
        navigate('/riderpackages');
    }

  return (
    <>
    
        <div className='CustomerDashboard'>
            <div className='customerDashboardTop'>
                <div className='customertotalPackages'>
                    <div className='customertotalPackagesLeft' onClick={handleToPackage}>
                        <h3>Total Packages</h3>
                        <h5>10</h5>
                    </div>
                </div>
                <div className='customerCreatePackage'>
                    <div className='customerCreatePackagetheButton'>
                        <h5>Create Package</h5>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CustomerDashboard
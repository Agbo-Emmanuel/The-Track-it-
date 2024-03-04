import React, { useContext } from 'react'
import './customerDashboardCss/customerDashboard.css'
import { useNavigate } from 'react-router-dom';
import { Thecontext } from '../../../App';


const CustomerDashboard = () => {


    const {setShowCreatePackage} = useContext(Thecontext)

    const navigate = useNavigate();

    // const handleToRider = ()=>{
    //     navigate('/riderlocation');
    // }

    const handleToPackage = ()=>{
        navigate('/customerpackages');
    }

  return (
    <>
    
        <div className='CustomerDashboard'>
            <div className='customerDashboardTop'>
                <div className='customertotalPackages'>
                    <div className='customertotalPackagesLeft' onClick={handleToPackage}>
                        <h3>Total Packages</h3>
                        <h5>0</h5>
                    </div>
                </div>
                <div className='customerCreatePackage'>
                    <div className='customerCreatePackagetheButton' onClick={()=>setShowCreatePackage(true)}>
                        <h5>Create Package</h5>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CustomerDashboard
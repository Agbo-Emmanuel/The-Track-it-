import React, { useContext } from 'react'
import './customerDashboardCss/customerLogout.css'
import { Thecontext } from '../../../App'
import { useNavigate } from 'react-router-dom'




const CompanyLogout = () => {

    const {setShowRiderLogout,setRiderProfileShow} = useContext(Thecontext)

    const navigate = useNavigate();

    const handleLogout = ()=>{
        navigate('/customerlogin');
    }
    const handleLogoutNo = ()=>{
        setShowRiderLogout(false)
        setRiderProfileShow(false)
    }



  return (

    <>
    
        <div className='RiderLogout'>
            <div className='riderLogoutPart'>
                <div className='riderLogoutText'>
                    <h1>Are you sure you want to Logout?</h1>
                </div>
                <div className='riderLogoutBtns'>
                    <button className='riderLogoutBtnYes' onClick={handleLogout}>yes</button>
                    <button className='riderLogoutBtnNo' onClick={handleLogoutNo}>no</button>
                </div>
            </div>
        </div>
    
    </>

  )
}

export default CompanyLogout
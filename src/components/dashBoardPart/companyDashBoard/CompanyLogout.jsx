import React, { useContext } from 'react'
import './companyDashboardCss/companyLogout.css'
import { Thecontext } from '../../../App'
import { useNavigate } from 'react-router-dom'




const CompanyLogout = () => {

    const {setShowCompanyLogout,setProfileShow} = useContext(Thecontext)

    const navigate = useNavigate();

    const handleLogout = ()=>{
        navigate('/companylogin');
    }
    const handleLogoutNo = ()=>{
        setShowCompanyLogout(false)
        setProfileShow(false)
    }



  return (

    <>
    
        <div className='CompanyLogout'>
            <div className='CompanyLogoutPart'>
                <div className='companyLogoutText'>
                    <h1>Are you sure you want to Logout?</h1>
                </div>
                <div className='companyLogoutBtns'>
                    <button className='companyLogoutBtnYes' onClick={handleLogout}>yes</button>
                    <button className='companyLogoutBtnNo' onClick={handleLogoutNo}>no</button>
                </div>
            </div>
        </div>
    
    </>

  )
}

export default CompanyLogout
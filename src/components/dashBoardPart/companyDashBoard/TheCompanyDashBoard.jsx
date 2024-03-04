import React, { useContext, useEffect } from 'react'
import '../companyDashBoard/companyDashboardCss/theCompanyDashboard.css'
import { useNavigate } from 'react-router-dom';
import { Thecontext } from '../../../App'
import axios from 'axios'




const TheCompanyDashBoard = () => {

  const {setShowCreateRider, setShowCreatePackage,companyToken} = useContext(Thecontext)

  const navigate = useNavigate();

    const handleToRider = ()=>{
        navigate('/companyriders');
    }

    const handleToPackage = ()=>{
        navigate('/companypackages');
    }

    const getAllRiders = 'https://track-it-eight-theta.vercel.app/api/v1/company/allriders'

    useEffect(()=>{
      async function fetchAllRiders(){
        try {
              const response = await axios.get(getAllRiders, {
                headers: {
                  "Authorization" : `Bearer ${companyToken}`
               }
              })
              console.log(response)
            

          }
          catch(err){
            console.log(err)
          }      
    }
    fetchAllRiders()
    },[])

  return (
    
    <>
    
        <div className='theCompanyDashboard'>
          <div className='theCompanyDashboardTop'>
            <div className='totalRiders'>
              <div className='totalRidersLeft' onClick={handleToRider}>
                <h3>Total Riders</h3>
                <h5>0</h5>
              </div>
              <div className='companyDashboardCreateRider' onClick={()=>setShowCreateRider(true)}>
                <h5>Create Rider</h5>
              </div>
            </div>
            <div className='totalPackages'>
              <div className='totalPackagesLeft' onClick={handleToPackage}>
                <h3>Total Packages</h3>
                <h5>0</h5>
              </div>
              <div className='companyDashboardCreatePackage'>
                <h5>Assign Package</h5>
              </div>
            </div>
          </div>
          <div className='theCompanyDashboardBottom'>
            <h2>Package history</h2>
            <div className='theCompanyDashboardBottomDivider'></div>
            <div className='theCompanyDashboardBottomProperties'>
              <nav>name</nav>
              <nav>status</nav>
              <nav>date</nav>
            </div>
            <div className='theCompanyDashboardBottomDown'>

            </div>
          </div>
        </div>
    
    </>
  )
}

export default TheCompanyDashBoard
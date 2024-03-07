import React, { useContext, useEffect, useState } from 'react'
import '../companyDashBoard/companyDashboardCss/theCompanyDashboard.css'
import { useNavigate } from 'react-router-dom';
import { Thecontext } from '../../../App'
import axios from 'axios'




const TheCompanyDashBoard = () => {


  const [numberOfRiders, setNumberOfRiders] = useState(localStorage.getItem("numberRiders"))
  const [totalPackages, setTotalPackages] = useState()
  const [totalRiders, setTotalRiders] = useState()

  const {setShowCreateRider, setShowCreatePackage,companyToken,
    companyName, setCompanyName,
    companyFirstLetter, setCompanyFirstLetter,
  } = useContext(Thecontext)

  const navigate = useNavigate();

    const handleToRider = ()=>{
        navigate('/companyriders');
    }

    const handleToPackage = ()=>{
        navigate('/companypackages');
    }

    const getCompanyDetail = 'https://track-it-eight-theta.vercel.app/api/v1/company'

    useEffect(()=>{
      async function getCompanyDetails(){
        try {
              const response = await axios.get(getCompanyDetail, {
                headers: {
                  "Authorization" : `Bearer ${companyToken}`
               }
              })
              console.log(response)
              setCompanyName(response.data.company.companyName)
              setCompanyFirstLetter(response.data.company.companyName.charAt(0))
              setTotalPackages(response.data.company.companyPackages.length)
              setTotalRiders(response.data.company.companyRiders.length)
          }
          catch(err){
            console.log(err)
          }      
    }
    getCompanyDetails()
    },[])

  return (
    
    <>
    
        <div className='theCompanyDashboard'>
          <div className='theCompanyDashboardTop'>
            <div className='totalRiders'>
              <div className='totalRidersLeft' onClick={handleToRider}>
                <h3>Total Riders</h3>
                <h5>{totalRiders}</h5>
              </div>
              {/* <div className='companyDashboardCreateRider' onClick={()=>setShowCreateRider(true)}>
                <h5>Create Rider</h5>
              </div> */}
            </div>
            <div className='totalPackages'>
              <div className='totalPackagesLeft' onClick={handleToPackage}>
                <h3>Assigned Packages</h3>
                <h5>{totalPackages}</h5>
              </div>
              {/* <div className='companyDashboardCreatePackage' onClick={()=>setShowCreatePackage(true)}>
                <h5>Create Package</h5>
              </div> */}
            </div>
            <div className='companyDashboardCreate'>
              <div className='companyDashboardCreateRider' onClick={()=>setShowCreateRider(true)}>
                <h5>Create Rider +</h5>
              </div>
              <div className='companyDashboardCreatePackage' onClick={()=>setShowCreatePackage(true)}>
                <h5>Create Package +</h5>
              </div>
              
            </div>
          </div>
          <div className='theCompanyDashboardBottom'>
            {/* <h2>Package history</h2> */}
            {/* <div className='theCompanyDashboardBottomDivider'></div> */}
            <div className='theCompanyDashboardBottomProperties'>
              {/* <nav>name</nav>
              <nav>status</nav>
              <nav>date</nav> */}
            </div>
          </div>
        </div>
    
    </>
  )
}

export default TheCompanyDashBoard
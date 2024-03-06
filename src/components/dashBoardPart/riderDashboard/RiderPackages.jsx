import React, { useContext } from 'react'
import './riderDashboardCss/riderPackage.css'
import RiderPackageRight from './RiderPackageRight'
import { Thecontext } from '../../../App'



const RiderPackages = () => {

  const {showPackageDetails, setShowPackageDetails} = useContext(Thecontext)

  return (
    <>
    
        <div className='RiderPackages'>
          <div className='riderPackageLeft'>
            <h3>List of Packages</h3>
            <div className='riderPackageLeftLine'></div>
            <div className='riderPackageLeftProperties'>
              <nav>Package Name</nav>
              <nav>Package ID</nav>
            </div>
            <div className='riderPackageLeftItemsPart'>
              <div className='riderPackageLeftItems' onClick={()=>setShowPackageDetails(true)}>
                <nav>Iphone 15</nav>
                <nav>O12367</nav>
              </div>
            </div>
          </div>

          <div className='riderPackageRight'>
             {
              showPackageDetails ? <RiderPackageRight/> : null
             }
          </div>
        </div>
    
    </>
  )
}

export default RiderPackages
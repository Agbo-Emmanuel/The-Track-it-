import React from 'react'
import './riderDashboardCss/riderPackage.css'



const RiderPackages = () => {


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
              <div className='riderPackageLeftItems'>

              </div>
            </div>
          </div>

          <div className='riderPackageRight'></div>
        </div>
    
    </>
  )
}

export default RiderPackages
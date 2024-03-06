import React, { useContext } from 'react'
import './riderDashboardCss/riderPackage.css'
import { Thecontext } from '../../../App'

const RiderPackageRight = () => {

    const {setShowPackageDetails} = useContext(Thecontext)

  return (
    <>
    
        <div className='riderPackageRightPart'>
            <div className='riderPackageRightPartTop'>
                <h3>Package</h3>
                <button className='closeRiderPackageDetailBtn' onClick={()=>setShowPackageDetails(false)}>x</button>
            </div>
            <div className='riderPackageRightLine'></div>
            <div className='riderPackageDetail'>
                <div className='riderPackageDetailProp'>
                    <nav>Name:</nav>
                    <nav>Weight:</nav>
                    <nav>ID:</nav>
                    <nav>Destination:</nav>
                </div>
                <div className='riderPackageTheDetails'>
                    <nav>Iphone 15</nav>
                    <nav>50kg</nav>
                    <nav>O12367</nav>
                    <nav>30 Rorobi Street</nav>

                    <button className='riderPackageTheDetailsDeliverBtn'>Delivered</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RiderPackageRight
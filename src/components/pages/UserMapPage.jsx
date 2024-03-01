import React from 'react'
import '../pagesCss/userMapPage.css'
import mapimg from '../images/mapimg.png'
import currentLocationimg from '../images/currentLocationimg.png'


const UserMapPage = () => {

  return (
    <>
    
        <div className='userMapPage'>
            <div className='trackingDetails'>
                <h5>Ongoing Tracking</h5>
                <div className='theTrackingDetails'>
                    <div className='productDetails'>
                        <h5>Item</h5>
                        <p>Shoe</p>
                    </div>
                    <div className='theTrackingDetailsDivider'></div>
                    <div className='locationDetails'>
                        <div className='locationImg'>
                            <img src={currentLocationimg} alt=''/>
                        </div>
                        <div className='theLocationDetails'>
                            <div className='currentLocation'>
                                <h6>Current Location</h6>
                                <p>121, Muyibi street Wilmer Apapa Lagos </p>
                            </div>
                            <div className='time'>
                                <h6>Time</h6>
                                <p>4:03pm</p>
                            </div>
                            <div className='date'>
                                <h6>Date</h6>
                                <p>02 march, 2024 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='userMap'>
                <img src={mapimg} alt='' />
            </div> */}
        </div>
    
    </>
  )
}

export default UserMapPage
import React, { useContext } from 'react'
import '../companyDashBoard/companyDashboardCss/riders.css'
import { Thecontext } from '../../../App'



const Riders = () => {


  const {setShowCreateRider} = useContext(Thecontext)

  return (
    
    <>
    
      <div className='RidersPage'>
        <div className='riderPageLeft'>
          <div className='riderPageLeftTop'>
            <h5>Riders List</h5>
            <button className='riderPageCreateRiderBtn' onClick={()=>setShowCreateRider(true)}>Create Rider</button>
          </div>
          <div className='riderPageLeftLine'></div>
          <div className='riderSearchPart'>
            <input 
              type='text'
              placeholder='search ID'
              className='searchInput'
            />
            <button className='searchBtn'>Search</button>
          </div>
          <div className='riderPageLeftLine'></div>
          <div className='listOfRiders'>

          </div>
        </div>
        <div className='riderPageRight'></div>
      </div>
    
    </>
  )
}

export default Riders
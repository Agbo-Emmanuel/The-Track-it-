import React, { useContext, useEffect, useState } from 'react'
import '../companyDashBoard/companyDashboardCss/riders.css'
import { Thecontext } from '../../../App'
import axios from 'axios'



const Riders = () => {



  const getAllRiders = 'https://track-it-eight-theta.vercel.app/api/v1/company/allriders'

    const [riders, setRiders] = useState([])
    const {companyToken,setShowAssignPackage} = useContext(Thecontext)


    useEffect(()=>{
        axios.get(getAllRiders,
          {
            headers: {
              "Authorization" : `Bearer ${companyToken}`
           }
          })
            .then((res) => {
              console.log(res.data)
              setRiders(res.data.riders)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


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
            <div className='riderListProperties'>
              <nav>name</nav>
              <nav>ID</nav>
            </div>
            <div className='riderPageLeftLine'></div>
            <div className='theRiders'>
              {
                riders.map((riders)=>{
                  return(
                    <div className='theRidersItems'>
                      <p>{riders.riderFirstName}</p>
                      <p>{riders.riderId}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/* <div className='riderPageRight'></div> */}
      </div>
    
    </>
  )
}

export default Riders
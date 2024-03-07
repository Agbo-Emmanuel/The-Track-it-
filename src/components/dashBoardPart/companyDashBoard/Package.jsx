import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import '../companyDashBoard/companyDashboardCss/package.css'
import { Thecontext } from '../../../App'
// import { Link } from 'react-router-dom'




const Package = () => {


  const url = 'https://track-it-eight-theta.vercel.app/api/v1/company/allpendingpackages'

    const [packages, setPackages] = useState([])
    const {companyToken,setShowAssignPackage, setCompanyPackageId} = useContext(Thecontext)


    // useEffect(()=>{
    //     axios.get(url,
    //       {
    //         headers: {
    //           "Authorization" : `Bearer ${companyToken}`
    //        }
    //       })
    //         .then((res) => {
    //           console.log(res.data)
    //           setPackages(res.data.pendingPackages)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    const unAssignPackageRef = useRef()

    const handleUnAssignedPackageSearch = ()=>{
      console.log(unAssignPackageRef.current.value)
    }

    useEffect(()=>{
      async function fetchAllRiders(){
        try {
              const response = await axios.get(url, {
                headers: {
                  "Authorization" : `Bearer ${companyToken}`
               }
              })
              console.log(response)
              setPackages(response.data.pendingPackages)
              // setCompanyPackageId(response.data.pendingPackages.packageId)
              // localStorage.setItem("companyPackageId", response.data.pendingPackages[0]._id)
              setCompanyPackageId(response.data.pendingPackages[0]._id)
          }
          catch(err){
            console.log(err)
          }      
    }
    fetchAllRiders()
    },[])


  return (
    
    <>  
    
      <div className='PackagePage'>
        <div className='packagePageLeft'>
          <div className='packagePageLeftTop'>
            List of Unassigned Packages
          </div>
          <div className='packagePageLeftLine'></div>
          <div className='packageSearchPart'>
            <input 
              type='text'
              placeholder='search ID'
              className='searchInput'
              ref={unAssignPackageRef}
            />
            <button className='searchBtn' onClick={handleUnAssignedPackageSearch}>Search</button>
          </div>
          <div className='packagePageLeftLine'></div>
          <div className='listOfPackages'>
            <div className='packageListProperties'>
              <nav>name</nav>
              <nav>ID</nav>
            </div>
            <div className='packagePageLeftLine'></div>
            <div className='thePackages'>
              {
                packages ? packages.map((packages)=>{
                  return(
                    <div className='thePackagesItems'>
                      <p>{packages.packageName}</p>
                      <p>{packages.packageId}</p>
                      <button className='assignButton' onClick={()=>setShowAssignPackage(true)}>Assign</button>
                    </div>
                  )
                }) : null
              }
            </div>
          </div>
        </div>
        <div className='packagePageRight'>
          <div className='packagePageRightTop'>
            <nav>List of Assigned Packages</nav>
          </div>
          <div className='packagePageRightLine'></div>
          <div className='packageSearchPart'>
            <input 
              type='text'
              placeholder='search ID'
              className='searchInput'
            />
            <button className='searchBtn'>Search</button>
          </div>
          <div className='packagePageRightLine'></div>
          <div className='listOfPackages'>
            <div className='packageListProperties'>
              <nav>name</nav>
              <nav>ID</nav>
            </div>
            <div className='packagePageLeftLine'></div>
            <div className='thePackages'>
              {/* <div className='theAssignedPackagesItems'>
                <p>Shoe</p>
                <p>23495</p>
                <button className='assignButton'>Track</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default Package
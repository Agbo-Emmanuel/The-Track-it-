import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../companyDashBoard/companyDashboardCss/package.css'
import { Thecontext } from '../../../App'
import { Link } from 'react-router-dom'




const Package = () => {


  const url = 'https://track-it-eight-theta.vercel.app/api/v1/company/allpendingpackages'

    const [packages, setPackages] = useState([])
    const {companyToken,setShowAssignPackage} = useContext(Thecontext)


    useEffect(()=>{
        axios.get(url,
          {
            headers: {
              "Authorization" : `Bearer ${companyToken}`
           }
          })
            .then((res) => {
              console.log(res.data)
              setPackages(res.data.pendingPackages)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


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
            />
            <button className='searchBtn'>Search</button>
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
                packages.map((packages)=>{
                  return(
                    <div className='thePackagesItems'>
                      <p>{packages.packageName}</p>
                      <p>{packages.packageId}</p>
                      <button className='assignButton' onClick={()=>setShowAssignPackage(true)}>Assign</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/* <div className='packagePageRight'>
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
              <div className='thePackagesItems'>
                <p>Shoe</p>
                <p>23495</p>
              </div>
              <div className='thePackagesItems'>
                <p>Shoe</p>
                <p>23495</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>



      {/* {
    packages.map((product)=>{

        return (

            <div className='Product'>
                <Link  to={`/detailpage/${product.id}`}  className='product'>
                    <img src={product.image} alt=''/>
                    <h2>{product.title}</h2>
                    <p>price: ${product.price}</p>
                </Link>
            </div>
        )

    })
} */}

    </>
  )

}

export default Package
import React from 'react'
import '../companyDashBoard/companyDashboardCss/package.css'




const Package = () => {


  return (
    
    <>  
    
      <div className='PackagePage'>
        <div className='packagePageLeft'>
          <div className='packagePageLeftTop'>
            List of Packages
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
            <div></div>
          </div>
        </div>
        <div className='packagePageRight'>
          <div className='packagePageRightTop'>

          </div>
        </div>
      </div>

    </>
  )

}

export default Package
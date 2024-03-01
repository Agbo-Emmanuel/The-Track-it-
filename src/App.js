import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './components/pages/Landingpage'
import Track from './components/pages/Track'
import About from './components/pages/About'
import Landing from './components/pages/Landing'
import UserMapPage from './components/pages/UserMapPage'
import Companysignup from './components/pages/Companysignup'
import Login from './components/pages/Login'
import VerifyEmail from './components/pages/VerifyEmail'
import CompanyDashboard from './components/dashBoardPart/companyDashBoard/CompanyDashboard'
import Riders from './components/dashBoardPart/companyDashBoard/Riders'
import TheCompanyDashBoard from './components/dashBoardPart/companyDashBoard/TheCompanyDashBoard'
import Package from './components/dashBoardPart/companyDashBoard/Package'
import RiderDashboardPart from './components/dashBoardPart/riderDashboard/RiderDashboardPart'
import RiderDashboard from './components/dashBoardPart/riderDashboard/RiderDashboard'
import RiderPackages from './components/dashBoardPart/riderDashboard/RiderPackages'
// import RiderLocation from './components/dashBoardPart/riderDashboard/RiderLocation'



export const Thecontext = createContext()

const App = () => {


  
  const [showCreateRider, setShowCreateRider] = useState(false)
  const [showCreatePackage, setShowCreatePackage] = useState(false)
  const [showCompanyLogout, setShowCompanyLogout] = useState(false)
  const [profileShow, setProfileShow] = useState(false)
  const [showRiderLogout, setShowRiderLogout] = useState(false)
  const [riderProfileShow, setRiderProfileShow] = useState(false)



  return (

    <Thecontext.Provider value={{
      showCreateRider, setShowCreateRider,
      showCreatePackage, setShowCreatePackage,
      showCompanyLogout, setShowCompanyLogout,
      profileShow, setProfileShow,
      showRiderLogout, setShowRiderLogout,
      riderProfileShow, setRiderProfileShow
    }}>
      <BrowserRouter>
        <Routes>

          <Route path='/companysignup' element= { <Companysignup/> }/>
          <Route path='/login' element= { <Login/> }/>
          <Route path='/verifyemail' element= { <VerifyEmail/> }/>
          
          <Route element= { <Landing/> }>
            <Route path='/' element= { <Landingpage/> }/>
            <Route path='/track' element= { <Track/> }/>
            <Route path='/about' element= { <About/> }/>
            <Route path='/usermap' element= { <UserMapPage/> }/>
          </Route>

          <Route element= { <CompanyDashboard/> }>
            <Route path='/companydashboard' element= { <TheCompanyDashBoard/> }/>
            <Route path='/companyriders' element= { <Riders/> }/>
            <Route path='/companypackages' element= { <Package/> }/>
          </Route>

          <Route element= { <RiderDashboardPart/> }>
            <Route path='/riderdashboard' element= { <RiderDashboard/> }/>
            {/* <Route path='/riderlocation' element= { <RiderLocation/> }/> */}
            <Route path='/riderpackages' element= { <RiderPackages/> }/>
          </Route>

        </Routes>
      </BrowserRouter>
    </Thecontext.Provider>

  )
}

export default App
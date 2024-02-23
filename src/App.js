import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './components/pages/Landingpage'
import Track from './components/pages/Track'
import About from './components/pages/About'
import Landing from './components/pages/Landing'
import UserMapPage from './components/pages/UserMapPage'
import Companysignup from './components/pages/Companysignup'
import Login from './components/pages/Login'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/companysignup' element= { <Companysignup/> }/>
        <Route path='/login' element= { <Login/> }/>
        <Route path='/' element= { <Landingpage/> }/>
        <Route element= { <Landing/> }>
          <Route path='/track' element= { <Track/> }/>
          <Route path='/about' element= { <About/> }/>
          <Route path='/usermap' element= { <UserMapPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
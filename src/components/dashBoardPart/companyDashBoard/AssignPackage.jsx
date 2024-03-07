import React, { useContext, useEffect, useState } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'
import axios from 'axios'
import Swal from 'sweetalert2'




const CreatePackage = () => {

    const {setShowAssignPackage,companyToken,companyPackageId,} = useContext(Thecontext)


    const [userData, setUserData] = useState({
        destination: "",
      })
    
      const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
        // console.log(userData)
    }
    


    const theData = {newDestination:userData.destination}
  const url =  `https://track-it-eight-theta.vercel.app/api/v1/company/updatepackagedestination/${companyPackageId}`


  const handleSendDestination = async(e)=>{
    
    e.preventDefault();

      try{
          const response = await axios.put(url, theData, {
            headers: {
              "Authorization" : `Bearer ${companyToken}`
           }})
          console.log(response)
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
            }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.error,
          icon: "error",
          confirmButtonText: "ok",
          }) 
          console.log(err)
      }
  }

  const [riders, setRiders] = useState([])

  const getAllRiders = 'https://track-it-eight-theta.vercel.app/api/v1/company/allriders'

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




  return (

    <>
    
        <div className='CreatePackage'>
            <div className='assignPackagePart'>
                <div className='assignPackagePartTop'>
                    <div className='assignPackageTopText'><h1>Assign package</h1></div>
                    <button className='assignPackageTopBtn' onClick={()=>setShowAssignPackage(false)}>x</button>
                </div>
                <div className='assignPackagePartLine'></div>
                <div className='assignPackagePartInputPart'>
                    <div className='assignPackageInputPartInput'>
                        <div className='destinationInput'>
                            <input 
                                type='text'
                                placeholder='enter destination'
                                name='destination'
                                value={userData.destination}
                                onChange={handleInputChange}
                            />
                            <button className='sendDestinationBtn' onClick={handleSendDestination}>Send</button>
                        </div>
                        <p>Select Rider</p>
                        <div className='allRidersHere'>
                            {
                                riders.map((riders)=>{
                                    return(
                                        <div className='theRidersList'>{riders.riderFirstName}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <button className='assignPackageBtn'>Assign Package</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
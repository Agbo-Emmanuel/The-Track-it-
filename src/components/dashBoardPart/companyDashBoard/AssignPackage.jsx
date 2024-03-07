import React, { useContext, useEffect, useState } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'
import axios from 'axios'
import Swal from 'sweetalert2'
import { PulseLoader } from "react-spinners"




const CreatePackage = () => {

    const {setShowAssignPackage,companyToken,companyPackageId,} = useContext(Thecontext)

    const [isLoading, setIsLoading] = useState(false)


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
  const [riderId, setRiderId] = useState()

  const getAllRiders = 'https://track-it-eight-theta.vercel.app/api/v1/company/allriders'


  const chooseRider = ()=>{

    axios.get(getAllRiders,
        {
          headers: {
            "Authorization" : `Bearer ${companyToken}`
         }
        })
          .then((res) => {
            console.log(res.data)
            setRiders(res.data.riders)
            setRiderId(res.data.riders[0].riderId)
            // console.log(res.data.riders[0].riderId)
          })
          .catch((err) => {
              console.log(err)
          })

  }

//   useEffect(()=>{
//     axios.get(getAllRiders,
//       {
//         headers: {
//           "Authorization" : `Bearer ${companyToken}`
//        }
//       })
//         .then((res) => {
//           console.log(res.data)
//           setRiders(res.data.riders)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }, [])

const assignPackage =  `https://track-it-eight-theta.vercel.app/api/v1/company/assigntorider/${riderId}/${companyPackageId}`

    const handleAssignPackage = async()=>{

      setShowAssignPackage(false)

        try{
            const response = await axios.put(assignPackage, {
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
                        
                    </div>
                    <button className='assignPackageBtn' disabled= {isLoading} onClick={chooseRider}>{isLoading ? <PulseLoader color="white"/> : "Choose Rider" }</button>
                    <div className='allRidersHere'>
                            {
                                riders.map((riders)=>{
                                    return(
                                        <div className='theRidersList'>
                                            <nav>{riders.riderFirstName}</nav>
                                            <nav>{riders.riderId}</nav>
                                            <button className='assignBtn' onClick={handleAssignPackage}>Assign</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
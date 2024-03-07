import React, { useContext, useState } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'
import Swal from 'sweetalert2'
import axios from 'axios'
import { PulseLoader } from "react-spinners"




const CreatePackage = () => {

    const {setShowCreatePackage,companyToken} = useContext(Thecontext)

    const [isLoading, setIsLoading] = useState(false)




    const [userData, setUserData] = useState({
        packageName: "",
        depature: "",
        packageWeight: "",
      })
    
      const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
        // console.log(userData)
    }


    const theData = {packageName:userData.packageName,depature: userData.depature, packageWeight: userData.packageWeight}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/createpackage"


  const handleCreatePackage = async(e)=>{
    
    e.preventDefault();

      try{
        setIsLoading(true)
          const response = await axios.post(url, theData, {
            headers: {
              "Authorization" : `Bearer ${companyToken}`
           }})
          console.log(response)
          setShowCreatePackage(false)
          
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
      setIsLoading(false)
  }





  return (

    <>
    
        <div className='CreatePackage'>
            <div className='creatingPackagePart'>
                <div className='creatingPackagePartTop'>
                    <div className='creatingPackageTopText'><h1>Create a package</h1></div>
                    <button className='creatingRiderTopBtn' onClick={()=>setShowCreatePackage(false)}>x</button>
                </div>
                <div className='creatingPackagePartLine'></div>
                <div className='creatingPackagePartInputPart'>
                    <div className='creatingPackageInputPartInput'>
                        <label>Package Name</label>
                        <input 
                            type="text"
                            placeholder='package name'
                            name='packageName'
                            value={userData.packageName}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Depature</label>
                        <input 
                            type="text"
                            placeholder='depature'
                            name='depature'
                            value={userData.depature}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Weight</label>
                        <input 
                            type="text"
                            placeholder='weight'
                            name='packageWeight'
                            value={userData.packageWeight}
                            onChange={handleInputChange}  
                        />
                    </div>
                </div>
                <button className='creatingPackageBtn' disabled= {isLoading} onClick={handleCreatePackage}>{isLoading ? <PulseLoader color="white"/> : "Create Package" }</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
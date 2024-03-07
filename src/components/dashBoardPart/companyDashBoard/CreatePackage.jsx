import React, { useContext, useState } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'
import Swal from 'sweetalert2'
import axios from 'axios'




const CreatePackage = () => {

    const {setShowCreatePackage,companyToken} = useContext(Thecontext)



    const [userData, setUserData] = useState({
        packageName: "",
        depature: "",
        weight: "",
      })
    
      const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
        // console.log(userData)
    }


    const theData = {packageName:userData.packageName,depature: userData.depature, weight: userData.weight}
  const url = "https://track-it-eight-theta.vercel.app/api/v1/company/rider/SignUp"


  const handleCreatePackage = async(e)=>{
    
    e.preventDefault();

      try{
          const response = await axios.post(url, theData, {
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
                            name='weight'
                            value={userData.weight}
                            onChange={handleInputChange}  
                        />
                    </div>
                </div>
                <button className='creatingPackageBtn' onClick={handleCreatePackage}>Create Package</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
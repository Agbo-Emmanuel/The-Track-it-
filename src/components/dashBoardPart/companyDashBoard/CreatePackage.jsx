import React, { useContext } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'




const CreatePackage = () => {

    const {setShowCreatePackage} = useContext(Thecontext)



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
                            placeholder='first name' 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Last Name</label>
                        <input 
                            type="text"
                            placeholder='last name' 
                        />
                    </div>
                    {/* <div className='creatingPackageInputPartInput'>
                        <label>Phone Number</label>
                        <input 
                            type="text"
                            placeholder='phone number' 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder='email address'  
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Password</label>
                        <input 
                            type="text"
                            placeholder='first name' 
                        />
                    </div> */}
                </div>
                <button className='creatingPackageBtn'>Create Package</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
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
                            placeholder='package name' 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Depature</label>
                        <input 
                            type="text"
                            placeholder='depature' 
                        />
                    </div>
                    <div className='creatingPackageInputPartInput'>
                        <label>Weight</label>
                        <input 
                            type="text"
                            placeholder='weight'  
                        />
                    </div>
                </div>
                <button className='creatingPackageBtn'>Create Package</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
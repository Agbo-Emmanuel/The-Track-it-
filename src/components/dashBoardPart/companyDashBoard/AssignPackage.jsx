import React, { useContext } from 'react'
import './companyDashboardCss/createPackage.css'
import { Thecontext } from '../../../App'




const CreatePackage = () => {

    const {setShowAssignPackage} = useContext(Thecontext)



  return (

    <>
    
        <div className='CreatePackage'>
            <div className='assignPackagePart'>
                <div className='assignPackagePartTop'>
                    <div className='creatingPackageTopText'><h1>Assign package</h1></div>
                    <button className='creatingRiderTopBtn' onClick={()=>setShowAssignPackage(false)}>x</button>
                </div>
                <div className='creatingPackagePartLine'></div>
                <div className='assignPackagePartInputPart'>
                    <div className='assignPackageInputPartInput'>
                        <p>Select Rider</p>
                        <select className='selectInput'>
                            <option>-select-</option>
                            <option>Emmanuel</option>
                            <option>othniel</option>
                            <option>samuel</option>
                        </select>
                        
                    </div>
                </div>
                <button className='assignPackageBtn'>Assign Package</button>
            </div>
        </div>
    
    </>

  )
}

export default CreatePackage
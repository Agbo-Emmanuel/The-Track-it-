import React, { useContext } from 'react'
import './companyDashboardCss/createRider.css'
import { Thecontext } from '../../../App'




const CreateRider = () => {

    const {setShowCreateRider} = useContext(Thecontext)



  return (

    <>
    
        <div className='CreateRider'>
            <div className='creatingRiderPart'>
                <div className='creatingRiderPartTop'>
                    <div className='creatingRiderTopText'><h1>Sign up a Rider</h1></div>
                    <button className='creatingRiderTopBtn' onClick={()=>setShowCreateRider(false)}>x</button>
                </div>
                <div className='creatingRiderPartLine'></div>
                <div className='creatingRiderPartInputPart'>
                    <div className='creatingRiderInputPartInput'>
                        <label>First Name</label>
                        <input 
                            type="text"
                            placeholder='first name' 
                        />
                    </div>
                    <div className='creatingRiderInputPartInput'>
                        <label>Last Name</label>
                        <input 
                            type="text"
                            placeholder='last name' 
                        />
                    </div>
                    <div className='creatingRiderInputPartInput'>
                        <label>Phone Number</label>
                        <input 
                            type="text"
                            placeholder='phone number' 
                        />
                    </div>
                    <div className='creatingRiderInputPartInput'>
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder='email address'  
                        />
                    </div>
                    <div className='creatingRiderInputPartInput'>
                        <label>Password</label>
                        <input 
                            type="text"
                            placeholder='first name' 
                        />
                    </div>
                </div>
                <button className='creatingRiderBtn'>Create Rider</button>
            </div>
        </div>
    
    </>

  )
}

export default CreateRider
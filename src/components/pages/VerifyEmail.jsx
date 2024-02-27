// import React, { useRef, useState } from 'react'
// import '../pagesCss/verifyEmail.css'
// import trackitLogo from '../images/trackitLogo.png'

// const VerifyEmail = () => {

//     // function handleInput(event) {
//     //     const inputField = event.target;
//     //     const nextField = inputField.nextElementSibling;
      
//     //     if (inputField.value.length === 1 && nextField) {
//     //       nextField.focus();
//     //     }
//     //   }


// //     const inputRefs = useRef([]);

// //   const handleInput = (index) => {
// //     const nextIndex = index + 1;
// //     if (nextIndex < inputRefs.current.length) {
// //       inputRefs.current[nextIndex].focus();
// //     }
// //     console.log()
// //   };


// const inputRefs = useRef([]);
//   const [inputValues, setInputValues] = useState(new Array(6).fill(''));
//   console.log(inputValues)


//   const handleInput = (index) => {
//     const nextIndex = index + 1;
//     if (nextIndex < inputRefs.current.length) {
//       inputRefs.current[nextIndex].focus();
//     }
//     setInputValues((prevValues) => {
//       const newValues = [...prevValues];
//       newValues[index] = inputRefs.current[index].value;
//       return newValues;
//     });

//   };

//   return (

//     <>
    
//         <div className='verifyEmail'>
//            <div className='verifyEmailPart'>
//                 <div className='verifyTrackLogo'>
//                     <img src={trackitLogo} alt=''/>
//                 </div>
//                 <h1>Verify your email</h1>
//                 <h5>Enter the 6 digit code sent to your email to verify </h5>
//                 <div className='verifyBoxPart'>
//                     {inputValues.map((value, index) => (
//                         <input
//                             className='verifyBox'
//                             key={index}
//                             type="text"
//                             maxLength={1}
//                             ref={(ref) => (inputRefs.current[index] = ref)}
//                             value={value}
//                             onChange={() => handleInput(index)}
//                         />
//                     ))}
//                 </div>
//                 <div className='theVerifyPart'>
//                     <div className='resendEMaill'>Resend email</div>
//                     <button className='verifyButton'>Verify</button>
//                 </div>
//            </div>
//         </div>
    
//     </>

//   )
// }

// export default VerifyEmail
// import React, { useRef, useState } from 'react'
import '../pagesCss/verifyEmail.css'
import trackitLogo from '../images/trackitLogo.png'

const VerifyEmail = () => {



  return (

    <>
    
        <div className='verifyEmail'>
           <div className='verifyEmailPart'>
                <div className='verifyTrackLogo'>
                    <img src={trackitLogo} alt=''/>
                </div>
                <h1>Welcome</h1>
           </div>
        </div>
    
    </>

  )
}

export default VerifyEmail
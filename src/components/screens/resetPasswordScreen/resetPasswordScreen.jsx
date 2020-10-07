import React from 'react'
import ResetPassword from "../../general/resetPassword";
import backEndApiCall from "../../../utils/backEndApiCall";

import "./resetPasswordScreen.css"

function ResetPasswordScreen() {
    const [adminResetData, setAdminResetData] = React.useState({email:"", error:""});
    const handleClick = () => {
        backEndApiCall("POST",`/resetPassword`,{emailAddress: adminResetData.email})
          .then(({data}) => {
            console.log(data);
            setAdminResetData({...adminResetData ,error: valueOf()})
          })
          .catch(console.error);
      };
    return (
        <div className="resetPassPage">
            <ResetPassword
            email={adminResetData.email}
            onEmailChange={value => setAdminResetData({...adminResetData ,email: value})}
            handleClick={handleClick} 
            error = {adminResetData.error}
            />
            
        </div>
    )
}

export default ResetPasswordScreen


// function ResetPasswordScreen() {
//   const [adminResetData, setAdminResetData] = React.useState({email:"", error:""});
//   const handleClick = () => {
//       backEndApiCall("POST",`/resetPassword`,{emailAddress: adminResetData.email})
//         .then(({data}) => {
//           console.log(data);
//           setAdminResetData({...adminResetData ,error: value})
//         })
//         .catch(console.error);
//     };
//   return (
//       <div className="resetPassPage">
//           <ResetPassword
//           email={adminResetData.email}
//           onEmailChange={value => setAdminResetData({...adminResetData ,email: value})}
//           handleClick={handleClick} 
//           error = {error}
//           />
          
//       </div>
//   )
// }

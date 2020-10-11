import React from 'react'
import ResetPassword from "../../general/resetPassword";
import {resetPassword} from "../../../utils/login"
import "./resetPasswordScreen.css"

function ResetPasswordScreen() {
    const [adminResetData, setAdminResetData] = React.useState({email:"", error:""});
    const handleClick = () => {
            resetPassword(adminResetData.email).then(message => setAdminResetData({...setAdminResetData,error:message})).catch(message => setAdminResetData({...adminResetData, error:message}))

    }
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


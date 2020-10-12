import React from 'react'
import ChangePassword from "../../general/changePassword";
import "./changePassordScreen.css";
import { changePassword as CheckPassword } from "../../../utils/changePassword";


function ChangePassowrdScreen() {
    const [adminChangPass, setAdminChangPass] = React.useState({password:"",confirmPassword:""});
    const handleClick = () => {
        CheckPassword(adminChangPass.password, adminChangPass.confirmPassword)
        .then(message => setAdminChangPass({...setAdminChangPass,error:message})).catch(({message}) => setAdminChangPass({...adminChangPass, error:message}))
        }


    return (
        <div className="changePasswordPage">
        <ChangePassword
        password={adminChangPass.password}
        confirmPassword={adminChangPass.confirmPassword}
        onPasswordChange={value => setAdminChangPass({...adminChangPass, password: value})}
        onConfirmPasswordChange={value => setAdminChangPass({...adminChangPass, confirmPassword: value})}
        handleClick={handleClick} 
        error = {adminChangPass.error}
              />
      </div>
    )
}

export default ChangePassowrdScreen


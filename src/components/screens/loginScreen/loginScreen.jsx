import React from "react";
import Login from "../../general/login";
import "./loginScreen.css";
import { login } from "../../../utils/login";


function LoginScreen() {
  const [adminData, setAdminData] = React.useState({email:"",password:""});
 
  const handleClick = () => {
  login(adminData.email, adminData.password).then().catch(e => setAdminData({...adminData, error:e.message}))
  }
  return (
    <div className="loginPage">
      <Login
        email={adminData.email}
        password={adminData.password}
        handleClick={handleClick} 
        onEmailChange={value => setAdminData({...adminData, email: value})}
        onPasswordChange={value => setAdminData({...adminData, password: value})}
        error = {adminData.error}
      />
    </div>
  );
}

export default LoginScreen;

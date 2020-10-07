import React from "react";
import Login from "../../general/login";
import backEndApiCall from "../../../utils/backEndApiCall";
import "./loginScreen.css";

function LoginScreen() {
  const [adminData, setAdminData] = React.useState({email:"",password:""});
 
  const handleClick = () => {
    backEndApiCall("POST",`/login`,adminData)
      .then((data) => {
        console.log(data);
      
      })
      .catch(console.error);
  };
  return (
    <div className="loginPage">
      <Login
        email={adminData.email}
        password={adminData.password}
        handleClick={handleClick} 
        onEmailChange={value => setAdminData({...adminData, email: value})}
        onPasswordChange={value => setAdminData({...adminData, password: value})}
      />
    </div>
  );
}

export default LoginScreen;

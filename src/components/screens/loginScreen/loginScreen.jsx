import React from "react";
import Login from "../../general/login";
import "./loginScreen.css";
import { login } from "../../../utils/login";
import {useHistory} from "react-router-dom";
import { routes } from "../../../constants";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../../recoilsState";

function LoginScreen() {
  const [adminData, setAdminData] = React.useState({email:"",password:""});
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const handleClick = () => {
  login(adminData.email, adminData.password).then(()=> {
    history.push(routes.home)
    setIsLoggedIn(true)
  }).catch(({message}) => setAdminData({...adminData, error:message}))
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

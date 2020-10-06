import React from 'react'
import Login from "../../general/login";
import {postLoginData} from "../../../utils/postLogin"
import "./loginScreen.css"

function LoginScreen() {
    const [adminData, setAdminData] = React.useState({});
    const handleClick = () => {
        postLoginData(`/login`, {email:"",password:""})
        .then((data) => {
            console.log(data);
            setAdminData(data)
        })
        .catch(console.error)
    }
    return (
        <div className="loginPage">
            <Login
            email={adminData.email}
            password={adminData.password}
            handleClick={handleClick}/>
        </div>
    )
}

export default LoginScreen
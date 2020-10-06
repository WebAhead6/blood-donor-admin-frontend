import React from "react";
import "./login.css";
import {Link} from "react-router-dom";

const Login = function ({email,password,handleClick}) {

    const [adminDetails, setAdminDetails] = React.useState({
      email:"",
      password:"",
    })

    return (

  <div className="login"> 
  <div className="login_container">
  <img src="/img/img-logo.svg" alt="" className="login_logo"/>
  <h2 className="login_formTitle">Admin Login</h2>
  <form action="/login" method="post" className="login_form">
      <div className="login_form_inputs">
          <input className="input" type="email" placeholder="email..." name="email" value={adminDetails.email} onChange={(e) => setAdminDetails({password, email: e.target.value})}/>
          <input className="input" type="password" placeholder="password" name="password" value={adminDetails.password} onChange={(e) => setAdminDetails({email, password: e.target.value})}/>
      </div>
<input className="input" type="submit" value="" onClick={() => handleClick(setAdminDetails)}/> 
 </form>
 <Link to="/resetPasswordScreen">
 <button className="login_forgotPass"> Forget your password?</button>
 </Link>
 <h2 className="login_error"> Error</h2>
</div>
  </div>

    );
}

export default Login;

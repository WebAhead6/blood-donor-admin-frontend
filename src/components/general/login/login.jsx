import React from "react";
import "./login.css";
import {Link} from "react-router-dom";
import {routes} from "../../../constants"

const Login = function ({email,password,handleClick,onEmailChange,onPasswordChange,error}) {

  

    return (

  <div className="login"> 
  <div className="login_container">
  <img src="/img/img-logo.svg" alt="" className="login_logo"/>
  <h2 className="login_formTitle">Admin Login</h2>
  <form action="#" className="login_form" onSubmit={(e)=> {e.preventDefault(); handleClick()}}>
      <div className="login_form_inputs">
          <input className="input" type="email" placeholder="email..." name="email" value={email} onChange={(e) => onEmailChange (e.target.value)}/>
          <input className="input" type="password" placeholder="password" name="password" value={password} onChange={(e) => onPasswordChange(  e.target.value)}/>
      </div>
<input className="input" type="submit" value="" /> 
 </form>
 <Link to={routes.ResetPasswordScreen}>
 <button className="login_forgotPass"> Forget your password?</button>
 </Link>
    <h2 className="login_error"> {error}</h2>
</div>
  </div>

    );
}

export default Login;

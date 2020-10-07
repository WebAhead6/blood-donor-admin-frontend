import React from "react";
import "./resetPassword.css";


const ResetPassword = function ({ email,handleClick,onEmailChange,error}) {
    return (

  <div className="resetpassword login"> 
  <div className="resetpassword_container login_container">
  <img src="/img/img-logo.svg" alt="" className="resetpassword_logo login_logo"/>
  <h2 className="reset-password-formTitle">Admin Login</h2>
  <form action="##"  className="resetpassword_form " onSubmit={(e)=> {e.preventDefault(); handleClick()}}>
      <div className="login_form_inputs login_form fullWidth">
          <input className="input" type="email" placeholder="email..." name="emailAddress"  value={email} onChange={(e) => onEmailChange (e.target.value)}/>
      </div>
<input className="input" type="submit" value="send"/> 
 </form>
 <h2 className="reset_error"> {error}</h2>
</div>
  </div>

    );
}

export default ResetPassword;

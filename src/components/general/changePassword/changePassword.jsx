import React from "react";
import "./changePassword.css";

const ChangePassword = function({
  password = "",
  confirmPassword = "",
  handleClick,
  onPasswordChange,
  onConfirmPasswordChange,
  error,
}) {
  return (
    <fieldset className="changePassword">
      <legend>Change Password</legend>
      <form
        action="#"
        className="changePassword_form"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          className="input"
          type="password"
          placeholder="password..."
          name="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="confirm password..."
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
        />
        <input className="input" type="submit" value="Update" />
      </form>
      <h2 className="passwordChange_error"> {error}</h2>
    </fieldset>
  );
};

export default ChangePassword;

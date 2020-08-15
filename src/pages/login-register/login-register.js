import React from "react";
import "./login-register.scss";

import Login from "../../components/login/login";
import SignUp from "../../components/sign-up/SignUp";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginRegister;

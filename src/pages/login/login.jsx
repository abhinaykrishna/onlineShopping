import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./login.styles.scss";

function Login() {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Login;

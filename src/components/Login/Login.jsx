import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="loginpage">
      <h1>ATTENDANCE TAKER</h1>
      <div className="otpbox loginbox">
        <div className="otpcontainer logincontainer">
          <div className="otphead loginhead">
            <p>Login</p>
          </div>
          <input type="text" placeholder="College ID" />
          <input type="Password" placeholder="Password" />
          <center>
            <button class="button-17">Submit</button>
            <br />
            Don't have an account ? <a href="/signup">SignUp</a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;

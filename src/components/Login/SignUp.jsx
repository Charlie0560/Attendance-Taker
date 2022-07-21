import React from "react";
import "./login.css";

function SignUp() {
  return (
    <div className="loginpage">
      <h1>ATTENDANCE TAKER</h1>
      <div className="otpbox loginbox">
        <div className="otpcontainer logincontainer">
          <div className="otphead loginhead">
            <p>Sign Up</p>
          </div>
          <input type="Name" placeholder="Full Name(As Per College Id Card)" />
          <input type="Password" placeholder="Password" />
          <input type="text" placeholder="Roll No." />
          <input type="text" placeholder="Divsion" />
          <input type="text" placeholder="College ID" />
          <center>
            <button class="button-17">Submit</button>
            <br />
            Already have an account ? <a href="/login">Login</a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

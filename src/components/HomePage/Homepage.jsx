import React from "react";
import "./homepage.css";
import "animate.css";
import Header from "./Header";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="otpbox">
        <div className="otpcontainer">
          <div className="otphead">
            <p>Enter OTP here</p>
            <i class="fa-solid fa-info"></i>
          </div>
          <input type="number" />
          <center>
            <button class="button-17">Submit</button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

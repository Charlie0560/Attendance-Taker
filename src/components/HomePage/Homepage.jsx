import React from "react";
import "./homepage.css";
import "animate.css";
import Header from "./Header";

function Homepage() {
  const showitems = () => {
    document.getElementById("menuitem1").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
    document.getElementById("menuitem2").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
    document.getElementById("menuitem3").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
  };
  return (
    <div className="homepage">
      <div className="homepageheader">
        <Header />

        <div className="menu">
          <div className="menuicon" onClick={() => showitems()}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="menuitems" id="menuitem1">
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="menuitems " id="menuitem2">
            <i class="fa-solid fa-server"></i>
          </div>
          <div className="menuitems" id="menuitem3">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </div>
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

import React from "react";
import "./homepage.css";

function Header() {
  const showitems = () => {
    document.getElementById("menuitem1").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
    document.getElementById("menuitem4").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
    document.getElementById("menuitem2").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
    document.getElementById("menuitem3").className =
      "menuicon menuicon2 animate__animated animate__fadeInRight";
  };
  return (
    <div className="homepageheader">
      <div className="headername">
        <p>ATTENDANCE TAKER</p>
      </div>

      <div className="menu">
        <div className="menuicon" onClick={() => showitems()}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="menuitems" id="menuitem4">
          <a href="/">
            {" "}
            <i class="fa-solid fa-house-chimney"></i>
          </a>
        </div>
        <div className="menuitems" id="menuitem1">
          <a href="/profile">
            {" "}
            <i class="fa-solid fa-user"></i>
          </a>
        </div>
        <div className="menuitems " id="menuitem2">
          <a href="/dashboard">
          <i class="fa-solid fa-server"></i>
          </a>
        </div>
        <div className="menuitems" id="menuitem3">
          <a href="/login"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Header;

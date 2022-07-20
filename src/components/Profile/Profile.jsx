import React from "react";
import Header from "../HomePage/Header";
import profilepic from "./profile.webp";
import './profile.css'

function Profile() {
  return (
    <div>
      <Header />
      <div className="profilebox">
        <div className="box profile">
         <center>
         <div className="userimg">
            <img src={profilepic} alt="" />
          </div>
          <p>Chaitanya Lokhande</p>
          <p>Roll No. 32331</p>
          <p>Enrollment no. E2k20104080</p>
         </center>
        </div>
      </div>
    </div>
  );
}

export default Profile;

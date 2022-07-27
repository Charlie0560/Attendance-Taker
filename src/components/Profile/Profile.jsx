import React from "react";
import Header from "../HomePage/Header";
import profilepic from "./profile.webp";
import "./profile.css";
import { useSelector } from "react-redux";


function Profile() {
  const user = useSelector((state)=>state.user.user.user);
  console.log(user);
  return (
    <div>
      <Header />
      <div className="profilebox">
        <div className="box profile">
          <center>
            <div className="userimg">
              <img src={profilepic} alt="" />
            </div>
            <p>{user.fullname}</p>
            <p>Roll No. {user.rollno}</p>
            {/* <p>{user.email}</p> */}
            <p> {user.email}</p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Profile;

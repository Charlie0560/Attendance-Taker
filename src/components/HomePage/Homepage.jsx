import React, { useState } from "react";
import "./homepage.css";
import "animate.css";
import Header from "./Header";
import axios from "axios";
import { useSelector } from "react-redux";

function Homepage() {
  const [code, setCode] = useState("");
  const user = useSelector((state) => state.user.user.user);
  
  const handleSubmit = async () => {
    try {
      const data = {
        code: code,
        students: {
          rollno: user.rollno,
          studentname: user.fullname,
        },
      };
      const giveatt = await axios.put("/attendance/giveattendace", data);
      console.log(giveatt);
      window.alert("Attendance given successfully");
    } catch (err) {
      console.log(err);
      window.alert("Code is expired or wrong");
    }
  };
  return (
    <div className="homepage">
      <Header />
      <div className="otpbox">
        <div className="otpcontainer">
          <div className="otphead">
            <p>Enter OTP here</p>
            <i className="fa-solid fa-info"></i>
          </div>
          <input type="text" maxLength="6" onChange={(e) => setCode(e.target.value)} />
          <center>
            <button className="button-17" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

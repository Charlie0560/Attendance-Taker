import React, { useRef } from "react";
import "./login.css";
import axios from "axios";

function SignUp() {
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const rollno = useRef();
  const div = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname.current.value,
      div: div.current.value,
      email: email.current.value,
      password: password.current.value,
      rollno: rollno.current.value,
    };
    if (!fullname || !email || !password || !rollno || !div) {
      document.getElementById("alert").innerHTML = "All Fields Are required.";
    }
    if (password.current.value.length < 6) {
      document.getElementById("alert").innerHTML =
        "Password Should be Minimum of 6 Characters";
    } else {
      try {
        await axios.post("/student/signup", data);
        window.location.replace("/login");
      } catch (err) {
        // console.log(err);
        window.alert("Something wents wrong");
      }
    }
  };
  return (
    <div className="loginpage">
      <h1>ATTENDANCE TAKER</h1>
      <form onSubmit={handleSubmit}>
        <div className="otpbox loginbox">
          <div className="otpcontainer logincontainer">
            <div className="otphead loginhead">
              <p>Sign Up</p>
            </div>
            <input
              required
              type="text"
              placeholder="Full Name(As Per College Id Card)"
              ref={fullname}
            />
            <input
              required
              type="mail"
              placeholder="Email(...@ms.pict.edu)"
              ref={email}
            />
            <input
              required
              type="Password"
              placeholder="Password (Min 6 Characters)"
              minLength="6"
              maxLength="10"
              ref={password}
            />
            <input required type="text" placeholder="Roll No." ref={rollno} />
            <input
              required
              type="text"
              placeholder="Divsion(eg.TE7)"
              ref={div}
            />
            <center>
              <button className="button-17" type="submit">
                Submit
              </button>
              <br />
              <div className="alert" id="errdiv"></div>
              <br />
              Already have an account ? <a href="/login">Login</a>
            </center>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

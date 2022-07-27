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
    if (password.current.value.length < 6) {
      document.getElementById("errordiv").innerHTML =
        "Password Should be Minimum of 6 Characters";
    } else {
      if (password.current.value.length < 10) {
        try {
          await axios.post("/student/signup", data);
          window.location.replace("/login");
        } catch (err) {
          console.log(err);
          document.getElementById("errordiv").innerHTML =
            "Something wents wrong.";
        }
      }else{
        document.getElementById("errordiv").innerHTML =
        "Password Should be Max of 10 Characters";
      }
    }
  };
  return (
    <div className="loginpage">
      <h1>ATTENDANCE TAKER</h1>
      <div className="otpbox loginbox">
        <div className="otpcontainer logincontainer">
          <div className="otphead loginhead">
            <p>Sign Up</p>
          </div>
          <input type="text" placeholder="Full Name(As Per College Id Card)" ref={fullname}/>
          <input type="mail" placeholder="email" ref={email} />
          <input type="Password" placeholder="Password" minlength="6" maxLength="10" ref={password}/>
          <input type="text" placeholder="Roll No." ref={rollno}/>
          <input type="text" placeholder="Divsion" ref={div}/>
          <center>
            <button class="button-17" type="submit" onClick={handleSubmit}>Submit</button>
            <br /><br />
            Already have an account ? <a href="/login">Login</a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

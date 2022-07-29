import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
import SuperAdmin from "./components/SuperAdmin/SuperAdmin";
import { useState } from "react";
import axios from "axios";
import Header from "./components/HomePage/Header";

function App() {
  const user = useSelector(selectUser);
  const [vadmin, setVadmin] = useState(null);
  // console.log(user.user.user);
  // console.log();
  const authenticate = async (e) => {
    try {
      const admin = await axios.get(
        `/teacher/getbyuid/${user.user.user.uniqueID}`
      );
      // console.log(admin);
      setVadmin(admin.data);
    } catch (err) {
      console.log(err);
    }
  };
  authenticate();

  return (
    <>
      {user.user ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route
              exact
              path="/dashboard"
              element={
                vadmin !== null ? (
                  <Dashboard />
                ) : (
                  <>
                    <Header />{" "}
                    <div className="errdiv">
                      <h2>Sorry ,You are not a teacher or admin</h2>
                    </div>
                  </>
                )
              }
            />
            <Route
              exact
              path="/admin"
              element={
                user.user.user.superadminid === "5432112345" ? (
                  <SuperAdmin />
                ) : (
                  <>
                    <Header />{" "}
                    <div className="errdiv">
                      <h2>Sorry ,You are not a teacher or admin</h2>
                    </div>
                  </>
                )
              }
            />
            <Route exact path="*" element={<Homepage />} />
            {/* <Route exact path="/signup" element={<SignUp />} /> */}
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path="*" element={<Login />} />
            {/* <Route exact path="/profile" element={<Login />} />
            <Route exact path="/admin" element={<Login />} />
            <Route exact path="/dashboard" element={<Login />} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

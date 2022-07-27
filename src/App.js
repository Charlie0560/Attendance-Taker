import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
function App() {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <>
      {user.user ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="*" element={<Homepage/>}/>
            {/* <Route exact path="/signup" element={<SignUp />} /> */}
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/profile" element={<Login />} />
            <Route exact path="/dashboard" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

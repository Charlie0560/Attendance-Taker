import './App.css';
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>

      </Routes>
    </Router>
    
    </>
  );
}

export default App;

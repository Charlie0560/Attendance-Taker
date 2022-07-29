import React, { useState } from "react";
import "./superadmin.css";
import TeachersTable from "./TeachersTable";
import Header from "../HomePage/Header";

import axios from "axios";

function SuperAdmin() {
  const [teachers, setTeachers] = useState([]);
  const [teachername, setTeachername] = useState("");
  const [teacheremail, setTeacheremail] = useState("");
  const [pass, setPass] = useState("");
  const [depart, setDepart] = useState("");
  const [uid, setUid] = useState(0);

  // useEffect(()=>{
  const fetchTeachers = async () => {
    const res = await axios.get("/teacher/getall");
    setTeachers(res.data);
  };
  fetchTeachers();
  // },[]);

  const addteachers = async (e) => {
    e.preventDefault();
    const data = {
      fullname: teachername,
      email: teacheremail,
      password: pass,
      department: depart,
      uniqueID: uid,
    };
    try {
      await axios.post("/teacher/addteacher", data);
      window.alert("Teacher Added Successfully");
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  };

  return (
    <div>
      <Header />
      <center>
        <h3>Add a Teacher</h3>
      </center>
      <div className="top">
        <input
          type="text"
          placeholder="Teacher Name"
          onChange={(e) => setTeachername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email(...@ms.pict.edu)"
          onChange={(e) => setTeacheremail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          onChange={(e) => setDepart(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unique ID"
          onChange={(e) => setUid(e.target.value)}
        />
        <button onClick={addteachers} type="submit" className="button">
          Create
        </button>
      </div>
      <center>
        <h3>Teachers</h3>
      </center>
      <div className="tablediv">
        <TeachersTable teachers={teachers} />
      </div>
    </div>
  );
}

export default SuperAdmin;

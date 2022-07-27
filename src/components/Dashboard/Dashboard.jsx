import React, { useState } from "react";
import Header from "../HomePage/Header";
import "./dashboard.css";
import BasicTable from "../Table/Table";
import axios from "axios";

function Dashboard() {
  const divisions = [
    { div: "All" },
    { div: "FE1" },
    { div: "FE2" },
    { div: "FE3" },
    { div: "FE4" },
    { div: "FE5" },
    { div: "FE6" },
    { div: "FE7" },
    { div: "FE8" },
    { div: "FE9" },
    { div: "FE10" },
    { div: "FE11" },
    { div: "SE1" },
    { div: "SE2" },
    { div: "SE3" },
    { div: "SE4" },
    { div: "SE5" },
    { div: "SE7" },
    { div: "SE8" },
    { div: "SE9" },
    { div: "SE10" },
    { div: "SE11" },
    { div: "TE1" },
    { div: "TE2" },
    { div: "TE3" },
    { div: "TE4" },
    { div: "TE5" },
    { div: "TE6" },
    { div: "TE7" },
    { div: "TE8" },
    { div: "TE9" },
    { div: "TE10" },
    { div: "TE11" },
  ];
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [lectureno, setLectureno] = useState(0);
  const [div, setDiv] = useState("");
  const [code, setCode] = useState(0);
  const [lista, setLista] = useState([]);
  const [filter, setFilter] = useState("all");

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const handleSubmit = async (e) => {
    const data = {
      div,
      subject,
      teacher,
      lectureno,
      generatedcode: code,
    };
    try {
      const attdata = await axios.post("/attendance/takeattendace", data);
      attendances();
      sleep(30000);
      axios.put(`/attendance/deletecode/${attdata.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };
  // const deletefunc = async (id) => {
  //   console.log("we are here");
  //   try {
  //     await ;
  //     window.alert("Deleted");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const attendances = async () => {
    try {
      const divdata = {
        div: filter,
      };
      if (divdata.div !== "all") {
        const res = await axios.get(`/attendance/getbydiv/${divdata.div}`);
        setLista(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
        res.data(lista[0].generatedcode);
      } else {
        const res = await axios.get(`/attendance/getall`);
        setLista(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
        // setLatest(res.data[0].generatedcode);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // setLatest();
  // console.log(lista)
  if (filter !== "all") {
    attendances();
  } else {
    attendances();
  }
  // const latest = lista[0].generatedcode;
  // console.log();

  return (
    <div>
      <Header />
      {/* <form onSubmit={handleSubmit}> */}
      <div className="dashboardcontents">
        <div className="sessiondetails">
          <input
            type="text"
            placeholder="Subject Name"
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="Teacher Name"
            onChange={(e) => setTeacher(e.target.value)}
          />
          <input
            type="number"
            placeholder="Lecture Number"
            onChange={(e) => setLectureno(e.target.value)}
          />
        </div>
        <div className="generator">
          <input
            type="text"
            placeholder="Division"
            onChange={(e) => setDiv(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Generate Code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Generate
          </button>
        </div>
        <p className="code">
          <b>Code : {code}</b>
        </p>
      </div>
      {/* </form> */}
      <hr className="horizontalline" />
      <div className="dashboardtable">
        <h3>Dashboard</h3>
        <select name="div" id="div" onChange={(e) => setFilter(e.target.value)}>
          {divisions.map((m) => (
            <option value={m.div}>{m.div}</option>
          ))}
        </select>

        {lista.length === 0 ? (
          <h3>No data found</h3>
        ) : (
          <BasicTable attenddata={lista} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;

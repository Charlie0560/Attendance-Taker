import React from "react";
import Header from "../HomePage/Header";
import "./dashboard.css";
import BasicTable from "../Table/Table";



function Dashboard() {

  const divisions = [
    {div: "FE1"},
    {div: "FE2"},
    {div: "FE3"},
    {div: "FE4"},
    {div: "FE5"},
    {div: "FE6"},
    {div: "FE7"},
    {div: "FE8"},
    {div: "FE9"},
    {div: "FE10"},
    {div: "FE11"},
    {div: "SE1"},
    {div: "SE2"},
    {div: "SE3"},
    {div: "SE4"},
    {div: "SE5"},
    {div: "SE7"},
    {div: "SE8"},
    {div: "SE9"},
    {div: "SE10"},
    {div: "SE11"},
    {div: "TE1"},
    {div: "TE2"},
    {div: "TE3"},
    {div: "TE4"},
    {div: "TE5"},
    {div: "TE6"},
    {div: "TE7"},
    {div: "TE8"},
    {div: "TE9"},
    {div: "TE10"},
    {div: "TE11"},
    
  ]
  return (
    <div>
      <Header />
      <div className="dashboardcontents">
        <div className="sessiondetails">
            <input type="text" placeholder="Subject Name"/>
            <input type="text" placeholder="Teacher Name"/>
            <input type="text" placeholder="Lecture Number"/>
        </div>
        <div className="generator">
          <input type="text" placeholder="Division"/>
          <input type="Number" placeholder="Generate Code"/>
          <button>Generate</button>
        </div>
          <p className="code"><b>Code : 5678</b></p>
      </div>
      <hr className="horizontalline" />
      <div className="dashboardtable">
        <h3>Dashboard</h3>
        <select name="div" id="div" >
          {divisions.map((m)=>(
            <option value={m.div}>{m.div}</option>
          ))}
        </select>
        <BasicTable/>
      </div>
    </div>
  );
}

export default Dashboard;

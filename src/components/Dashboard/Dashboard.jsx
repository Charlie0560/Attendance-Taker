import React from "react";
import Header from "../HomePage/Header";
import "./dashboard.css";
import BasicTable from "../Table/Table";

function Dashboard() {
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
          <input type="Number" placeholder="Generate Code"/>
          <button>Generate</button>
        </div>
          <p className="code"><b>Code : 5678</b></p>
      </div>
      <hr className="horizontalline" />
      <div className="dashboardtable">
        <h3>Dashboard</h3>
        <BasicTable/>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
// import Widget from "./Widget";
import Feed from "../Feed";
import "../Style/layout.css";
import Sidebar from "../Sidebar";

const HomePages = () => {
  // console.log("hii");
  return (
    <div className="quoraContents">
      <div className="quoraContent">
        <Sidebar />
        <Feed />
        {/* <Widget /> */}
      </div>
    </div>
  );
};

export default HomePages;

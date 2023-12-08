import React from "react";
import SidebarAnswe from "../SidebarAnswe";

import AnswerFeed from "../AnswerFeed";
import "../Style/sidebar.css";
const Answer = () => {
  console.log("hii");

  return (
    <div className="quoraContents">
      <div className="quoraContent">
        <SidebarAnswe />
        <AnswerFeed />
      </div>
    </div>
  );
};

export default Answer;

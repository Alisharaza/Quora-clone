import React from "react";
import QuoraHeader from "./QuoraHeader";

const Layout = ({ children }) => {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="layoutMain">{children}</div>
    </div>
  );
};

export default Layout;

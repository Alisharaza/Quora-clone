import React from "react";
import "./App.css";
// import Quora from "./Component/Quora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import HomePages from "./Component/Pages/HomePages";
import Following from "./Component/Pages/Following";
import Spaces from "./Component/Pages/Spaces";
import Notification from "./Component/Pages/Notification";
import Answer from "./Component/Pages/Answer";
import Login from "./Component/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/following" element={<Following />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

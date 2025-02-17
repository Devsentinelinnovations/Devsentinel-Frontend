import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default RouterPath;

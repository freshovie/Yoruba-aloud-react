import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const Display = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Display;

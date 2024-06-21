import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { AdminPro, Categories, Dashboard, LearnMat, Quiz, Sidebar } from "../Pages";

const NotFound = () => (
  <div>
    <h2>Page Not Found</h2>
    <Link to="/">
      <button style={{ color: "red", borderRadius: "20px", padding: "15px 30px" }}>
        Return to Home
      </button>
    </Link>
  </div>
);

const AdminRoutes = () => {
  const location = useLocation();
  const validAdminPaths = ['/admin/admin', '/admin/categories', '/admin/dashboard', '/admin/learn-material', '/admin/quiz'];
  const isValidAdminPath = validAdminPaths.includes(location.pathname);

  return (
    <>
      {isValidAdminPath && <Sidebar />}
      <Routes>
        <Route path="admin" element={<AdminPro />} />
        <Route path="categories" element={<Categories />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="learn-material" element={<LearnMat />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const Display = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Display;

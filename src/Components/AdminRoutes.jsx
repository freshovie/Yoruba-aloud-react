import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AdminPro, Categories, Dashboard, LearnMat, Quiz, Sidebar } from "../Pages";
import NotFound from "../Page404/Page404";

const AdminRoutes = () => {
  const location = useLocation();
  const validAdminPaths = [
    "/admin/adminprofile",
    "/admin/categories",
    "/admin/dashboard",
    "/admin/learn-material",
    "/admin/quiz",
  ];
  const isValidAdminPath = validAdminPaths.includes(location.pathname);
  const sidebarClass = isValidAdminPath ? "active" : "";

  return (
    <>
      {isValidAdminPath && <Sidebar />}
      <div className={`adminpro ${sidebarClass}`}>
        <Routes>
          <Route path="adminprofile" element={<AdminPro />} />
          <Route path="categories" element={<Categories />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="learn-material" element={<LearnMat />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminRoutes;

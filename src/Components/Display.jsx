import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  AdminPro,
  Categories,
  Dashboard,
  LearnMat,
  Quiz,
  Sidebar,
} from "../Pages";
import Page404 from "../Page404/Page404";

// CSS for NotFound component
const styles = {
  container: {
    width: "100vw",
    flexDirection: "column",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#2d85de",
    color: "#fff"
  },
  button: {
    backgroundColor: "#ff",
    color: "#2D85DE",
    borderRadius: "20px",
    padding: "15px 30px",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  },
  buttonHover: {
    backgroundColor: "#1A6F9B", // Changed background color on hover
  },
};

// NotFound component to handle 404 errors
const NotFound = () => (
  <div style={styles.container}>
    <h2>Page Not Found</h2>
    <p>
      Sorry, the page you are looking for does not exist. Please check the URL
      and try again.
    </p>
    <Page404 />
    <Link to="/" style={{ textDecoration: "none" }}>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Return to Home
      </button>
    </Link>
  </div>
);

// AdminRoutes component to handle admin-specific routes
const AdminRoutes = () => {
  const location = useLocation();

  // Define valid admin paths
  const validAdminPaths = [
    "/admin/admin",
    "/admin/categories",
    "/admin/dashboard",
    "/admin/learn-material",
    "/admin/quiz",
  ];

  // Check if the current path is a valid admin path
  const isValidAdminPath = validAdminPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render the Sidebar only if the path is valid */}
      {isValidAdminPath && <Sidebar />}
      <Routes>
        <Route path="admin" element={<AdminPro />} />
        <Route path="categories" element={<Categories />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="learn-material" element={<LearnMat />} />
        <Route path="quiz" element={<Quiz />} />
        {/* Handle 404 within admin routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// Display component to manage the main routing of the application
const Display = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for SignUp and Login */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* Handle 404 for all other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Display;

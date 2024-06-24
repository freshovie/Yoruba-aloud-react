import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import Login from "./Login";
import SignUp from "./SignUp";
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
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
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
    backgroundColor: "#1A6F9B",
    color: "#fff",
  },
};

// NotFound component to handle 404 errors
const NotFound = () => {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist. Please check the URL
        and try again.
      </p>
      <Page404 />
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Return to Home
        </button>
      </Link>
    </div>
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

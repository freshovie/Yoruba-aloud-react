import React, { useState } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboardCustomize, MdCategory, MdQuiz, MdOutlineLogout } from "react-icons/md";
import { SiGreatlearning } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const location = useLocation();
  const [closeMenu, setCloseMenu] = useState(false);


  // const changeWidth = document.querySelector(dashboard) {
    
  // }

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const logout = () => {
    console.log("Logging out...");
    // Implement your logout logic here
  };

  return (
    <div className={`sidebar ${closeMenu ? "active" : ""}`}>
      <div className={`burgerContainer ${closeMenu ? "active" : ""}`}>
        <div className="burgerTrigger">Yoruba Aloud</div>
        <div className="burgerMenu" onClick={handleCloseMenu}>
        {/* changeWidth */}
          <GiHamburgerMenu className="hamIcon" />
        </div>
      </div>
      <div className={`contentContainer ${closeMenu ? "active" : ""}`}>
        <ul>
          <li className={location.pathname === "/admin/dashboard" ? "active" : ""}>
            <Link to="/admin/dashboard">
              <MdDashboardCustomize className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={location.pathname === "/admin/categories" ? "active" : ""}>
            <Link to="/admin/categories">
              <MdCategory className="icon" />
              <span>Categories</span>
            </Link>
          </li>
          <li className={location.pathname === "/admin/learn-material" ? "active" : ""}>
            <Link to="/admin/learn-material">
              <SiGreatlearning className="icon" />
              <span>Learning Materials</span>
            </Link>
          </li>
          <li className={location.pathname === "/admin/quiz" ? "active" : ""}>
            <Link to="/admin/quiz">
              <MdQuiz className="icon" />
              <span>Quiz</span>
            </Link>
          </li>
          <li className={location.pathname === "/admin/adminprofile" ? "active" : ""}>
            <Link to="/admin/adminprofile">
              <CgProfile className="icon" />
              <span>Admin Profile</span>
            </Link>
          </li>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={logout}>
              <MdOutlineLogout className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

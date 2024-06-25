import React, { useState } from 'react';
import './style.css';
import { MdDashboardCustomize, MdCategory, MdQuiz, MdOutlineLogout } from "react-icons/md";
import { SiGreatlearning } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Sidebar = ({ onButtonClick, activeContent }) => {
  const [closeMenu, setCloseMenu] = useState(false);

  const buttonItems = [
    { id: 0, name: 'Dashboard', icon: <MdDashboardCustomize className="icon" />, bname: 'dashboard' },
    { id: 1, name: 'Categories', icon: <MdCategory className="icon" />, bname: 'categories' },
    { id: 2, name: 'Learning Material', icon: <SiGreatlearning className="icon" />, bname: 'learn-material' },
    { id: 3, name: 'Quiz', icon: <MdQuiz className="icon" />, bname: 'quiz' },
    { id: 4, name: 'Admin Profile', icon: <CgProfile className="icon" />, bname: 'adminprofile' },
    { id: 5, name: 'Logout', icon: <MdOutlineLogout className="icon" />, bname: 'logout' },
  ];

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const showSidebar = buttonItems.map((item) => (
    <li key={item.id} className={activeContent === item.bname ? "active" : ""}>
      {item.bname !== 'logout' ? (
        <button onClick={() => onButtonClick(item.bname)} className="sidebar-button">
          {item.icon}
          <span className="sidebar-text">{item.name}</span>
        </button>
      ) : (
        <Link to="/" className="sidebar-button">
          {item.icon}
          <span className="sidebar-text">{item.name}</span>
        </Link>
      )}
    </li>
  ));

  return (
    <div className={`sidebar ${closeMenu ? "active" : ""}`}>
      <div className={`burger-container ${closeMenu ? "active" : ""}`}>
        <div className="burger-trigger">Yoruba Aloud</div>
        <div className="burger-menu" onClick={handleCloseMenu}>
          <GiHamburgerMenu className="ham-icon" />
        </div>
      </div>
      <div className={`content-container ${closeMenu ? "active" : ""}`}>
        <ul>
          {showSidebar}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

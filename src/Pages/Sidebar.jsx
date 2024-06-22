import React from 'react';
import './style.css';
import { MdDashboardCustomize, MdCategory, MdQuiz, MdOutlineLogout } from "react-icons/md";
import { SiGreatlearning } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  // Define the logout function
  const logout = () => {
    // Logic for logout can be added here
    console.log("Logging out...");
  };

  return (
    <div className='sidebar'>
      <div className="burgerContainer">
        <div className="burgerTrigger"></div>
        <div className="burgerMenu"></div>
      </div>
      <div className="contentContainer">
      <ul>
        <li>
        <MdDashboardCustomize />
        <a href="/">Dashboard</a>
        </li>
        <li>
        <MdCategory />
        <a href="/">Categories</a>
        </li>
        <li>
        <SiGreatlearning />
        <a href="/">Learning Materials</a>
        </li>
        <li>
        <MdQuiz />
        <a href="/">Quiz</a>
        </li>
        <li>
        <CgProfile />
        <a href="/">Admin Profile</a>
        </li>
        <li>
        <MdOutlineLogout />
        <a href="/" onClick={logout}>Logout</a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;

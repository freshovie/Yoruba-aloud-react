import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './style.css';

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('dashboard');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onButtonClick={handleButtonClick} activeContent={activeContent} />
      <div className="content">
        {activeContent === 'dashboard' && <div className="dashboard-content"><h1>Dashboard</h1></div>}
        {activeContent === 'categories' && <div className="categories-content"><h1>Categories</h1></div>}
        {activeContent === 'learn-material' && <div className="learn-material-content"><h1>Learning Materials</h1></div>}
        {activeContent === 'quiz' && <div className="quiz-content"><h1>Quiz</h1></div>}
        {activeContent === 'adminprofile' && <div className="admin-profile-content"><h1>Admin Profile</h1></div>}
      </div>
    </div>
  );
};

export default Dashboard;

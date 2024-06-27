import React from 'react';
import Sidebar from './Sidebar';
import './style.css';

const Categories = ({ activeContent, onButtonClick }) => {
  return (
    <>
      <Sidebar onButtonClick={onButtonClick} activeContent={activeContent} />
      <div className={`content-container categories ${activeContent === 'categories' ? 'active' : ''}`}>
        <h1 id='cat'>Categories good</h1>
      </div>
    </>
  );
};

export default Categories;

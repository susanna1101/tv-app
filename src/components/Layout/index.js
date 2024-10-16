import React from 'react';
import MainMenu from '../Menu';
import './style.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="menu-container">
        <MainMenu />
      </div>
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;

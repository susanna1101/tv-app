import React, { useState } from 'react';
import './style.css';
import ProfileInfo from '../ProfileInfo'
import { Link, useLocation } from 'react-router-dom';

const path = '../../assets'
const MainMenu = () => {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

  return (
    <div 
        className={`menu-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <div className={`profile ${isHovered ? 'hovered' : ''}`}>
            <div className='profile-img'>
            </div>
            <div className='profile-name'>User</div>
          </div>
      <div className="menu-icons">
        {/* Add menu icons here */}
          <Link
            to="/Search" 
            className={`item ${location.pathname === '/Search' ? 'active' : ''}`}
          >
            <div className="menu-item search">
              <div className='menu-icon'>
                <img src={`${path}/icons/ICON - Search.png`} />
              </div>
                <span>Search</span>
            </div>
          </Link>
          <Link
            to="/" 
            className={`item ${location.pathname === '/' ? 'active' : ''}`}
          >
            <div className="menu-item home">
              <div className='menu-icon'>
                <img src={`${path}/icons/Group 46.png`} />
              </div>
                <span>Home Page</span>
              </div>
          </Link>
          <Link
            to="/tv" 
            className={`item ${location.pathname === '/tv' ? 'active' : ''}`}
          >
            <div className="menu-item tv">
              <div className='menu-icon'>
                <img src={`${path}/icons/Group 56.png`} />
              </div>
              <span>TV Shows</span>
            </div>
          </Link>
          <Link
            to="/movies" 
            className={`item ${location.pathname === '/movies' ? 'active' : ''}`}
          >
            <div className="menu-item movies">
              <div className='menu-icon'>
                <img src={`${path}/icons/Group 54.png`} />
              </div>
              <span>Movies</span>
            </div>
          </Link>
          <Link
            to="/gentres" 
            className={`item ${location.pathname === '/gentres' ? 'active' : ''}`}
          >
            <div className="menu-item gentres">
              <div className='menu-icon'>
                <img src={`${path}/icons/Group 53.png`} />
              </div>
              <span>Gentres</span>
            </div>
          </Link>
          <Link
            to="/watchLater" 
            className={`item ${location.pathname === '/watchLater' ? 'active' : ''}`}
          >
            <div className="menu-item watch">
              <div className='menu-icon'>
                <img src={`${path}/icons/Group 47.png`} />
              </div>
              <span>Watch Later</span>
            </div>
          </Link>
      </div>
      <ProfileInfo hover={isHovered} />
    </div>
  );
};

export default MainMenu;

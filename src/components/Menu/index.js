import React, { useState } from 'react';
import './style.css';
import ProfileInfo from '../ProfileInfo';
import { Link, useLocation } from 'react-router-dom';

const path = '../../assets';

const menuItems = [
  { to: '/Search', label: 'Search', icon: 'ICON - Search.png' },
  { to: '/', label: 'Home', icon: 'Group 46.png' },
  { to: '/tv', label: 'TV Shows', icon: 'Group 56.png' },
  { to: '/movies', label: 'Movies', icon: 'Group 54.png' },
  { to: '/gentres', label: 'Genres', icon: 'Group 53.png' },
  { to: '/watchLater', label: 'Watch Later', icon: 'Group 47.png' }
];

const MainMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();

  return (
    <div 
      className={`menu-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`profile ${isHovered ? 'hovered' : ''}`}>
        <div className='profile-img'></div>
        <div className='profile-name'>User</div>
      </div>

      <div className="menu-icons">
        {menuItems.map(({ to, label, icon }) => (
          <Link key={to} to={to} className={`item ${pathname === to ? 'active' : ''}`}>
            <div className={`menu-item ${label.toLowerCase().replace(' ', '-')}`}>
              <div className='menu-icon'>
                <img src={`${path}/icons/${icon}`} alt={label} />
              </div>
              <span>{label}</span>
            </div>
          </Link>
        ))}
      </div>
      
      <ProfileInfo hover={isHovered} />
    </div>
  );
};

export default MainMenu;
import React from 'react';
import './style.css';

const ProfileInfo = ({hover}) => {
  return (
    <div className={`${hover ? 'show' : ''} profile-info`}>
      <div className="profile-item">Language</div>
      <div className="profile-item">Get Help</div>
      <div className="profile-item">Exit</div>
    </div>
  );
};

export default ProfileInfo;

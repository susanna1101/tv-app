import React from 'react';

const VideoCard = ({ video }) => {
  const { Title, CoverImage, Description, VideoUrl } = video;

  return (
    <div className="video-card">
      <img src={`/assets/images/${CoverImage}`} alt={Title} className="video-image" />
      <div className="video-details">
        <h3>{Title}</h3>
        <p>{Description}</p>
        <a href={VideoUrl} target="_blank" rel="noopener noreferrer" className="watch-btn">Watch</a>
      </div>
    </div>
  );
};

export default VideoCard;

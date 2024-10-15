import React, { useEffect, useState } from 'react';
import TrendingNow from '../TrendingNow'
import './style.css';

const path = '../../assets/'
const FeaturedVideo = ({ data }) => {
  const {Featured, TendingNow} = data
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [featuredUpdatedMovie, setFeaturedUpdatedMovie] = useState({
    CoverImage: Featured.CoverImage,
    Category: Featured.Category,
    TitleImage: Featured.TitleImage,
    ReleaseYear: Featured.ReleaseYear,
    MpaRating: Featured.MpaRating,
    Duration: Featured.Duration,
    Description: Featured.Description,
    VideoUrl: Featured.VideoUrl
  });
  const [showVideo, setShowVideo] = useState(false);
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };
    const handleMovieClick = (movie) => {
      setFeaturedMovie(movie);
      sessionStorage.setItem('lastSeenMovieId', movie.Id);
  
      setTimeout(() => {
        setShowVideo(true);
      }, 2000);
    };

    useEffect(()=>{
      if(featuredMovie) {
        setFeaturedUpdatedMovie({
          CoverImage: featuredMovie.CoverImage,
          Category: featuredMovie.Category,
          TitleImage: featuredMovie.TitleImage,
          ReleaseYear: featuredMovie.ReleaseYear,
          MpaRating: featuredMovie.MpaRating,
          Duration: featuredMovie.Duration,
          Description: featuredMovie.Description,
          VideoUrl: featuredMovie.VideoUrl
        })
      }

    }, [featuredMovie])
    console.log(featuredMovie, 'VideoUrl')
  return (
    <div className="featured-video">
      {!featuredUpdatedMovie.VideoUrl ? (
        
      <div className='featured-image' style={{backgroundImage: `url(${path}${featuredUpdatedMovie.CoverImage})`, backgroundPosition: !featuredMovie && '210px -20px', backgroundSize: !featuredMovie ? '89%': 'cover'}}>
          <div className='featured-info'>
            <div className="video-info">
              <span className='category'>{featuredUpdatedMovie.Category}</span>
              <img src={`${path}/${featuredUpdatedMovie.TitleImage}`} />
              <span className='details'>
                <span>
                  {featuredUpdatedMovie.ReleaseYear}
                </span>
                <span>
                  {featuredUpdatedMovie.MpaRating}
                </span>
                <span>
                  {formatDuration(featuredUpdatedMovie.Duration)}</span>
                </span>
              <p>{featuredUpdatedMovie.Description}</p>
              <div>
                <button className='btn'>
                  <img src="../../assets/icons/Play_symbol.png" />
                  Play
                </button>
                <button className='btn more'>More Info</button>
              </div>
            </div>
          <TrendingNow setFeaturedMovie={setFeaturedMovie} handleMovieClick={handleMovieClick} data={TendingNow} />
          </div>
        </div>
      ) : (
        <>
          <video
            key={featuredUpdatedMovie.VideoUrl}
            width="100%" height="100%" autoPlay muted loop>
            <source src={featuredUpdatedMovie.VideoUrl} type="video/mp4" />
          </video>
          <div className='featured-wrapper'>
            <div className='featured-info'>
              <div className="video-info">
                <span className='category'>{featuredUpdatedMovie.Category}</span>
                <img src={`${path}/${featuredUpdatedMovie.TitleImage}`} />
                <span className='details'>
                  <span>
                    {featuredUpdatedMovie.ReleaseYear}
                  </span>
                  <span>
                    {featuredUpdatedMovie.MpaRating}
                  </span>
                  <span>
                    {formatDuration(featuredUpdatedMovie.Duration)}</span>
                  </span>
                <p>{featuredUpdatedMovie.Description}</p>
                <div>
                  <button className='btn'>
                    <img src="../../assets/icons/Play_symbol.png" />
                    Play
                  </button>
                  <button className='btn more'>More Info</button>
                </div>
              </div>
            <TrendingNow setFeaturedMovie={setFeaturedMovie} handleMovieClick={handleMovieClick} data={TendingNow} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedVideo;

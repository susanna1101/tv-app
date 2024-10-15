import React, { useEffect, useState, useRef } from 'react';
import './style.css';

const TrendingNow = ({ movies, handleMovieClick, setFeaturedMovie }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    // Load movies from JSON, sort by `created_at`, and limit to 50
    const sortedMovies = movies.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 50);

    // Check sessionStorage for last seen movie
    const lastSeenMovieId = sessionStorage.getItem('lastSeenMovieId');
    if (lastSeenMovieId) {
      const lastSeenMovie = sortedMovies.find(movie => movie.Id === lastSeenMovieId);
      if (lastSeenMovie) {
        sortedMovies.unshift(sortedMovies.splice(sortedMovies.indexOf(lastSeenMovie), 1)[0]);
      }
    }
    
    setTrendingMovies(sortedMovies);
    setFeaturedMovie(lastSeenMovieId ? sortedMovies[0] : null); // Set initial featured movie
  }, [movies]);

  // Handle mouse drag for carousel
  const handleMouseDown = (e) => {
    const startX = e.pageX || e.touches[0].pageX;
    const initialScrollLeft = carouselRef.current.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.pageX || moveEvent.touches[0].pageX;
      const walk = (x - startX) * 2; // Adjust the scroll speed
      carouselRef.current.scrollLeft = initialScrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="trending-section">
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {trendingMovies.map((movie, index) => (
          <div
            key={movie.Id}
            className="carousel-item"
            onClick={() => handleMovieClick(movie)}
            style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
          >
            <img src={`../../assets/${movie.CoverImage}`} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;

import React, { useState, useEffect } from 'react';
import './style.css';
import Carousel from '../Carousel';

const TrendingNow = ({ data, handleMovieClick, featuredMovie, setFeaturedMovie }) => {
  return (
    <div className="trending-now">
      <h2>Trending Now</h2>
      <Carousel movies={data?.slice(0, 50)} featuredMovie={featuredMovie} setFeaturedMovie={setFeaturedMovie} handleMovieClick={handleMovieClick} />
    </div>
  );
};

export default TrendingNow;

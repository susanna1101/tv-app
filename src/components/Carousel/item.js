import React from 'react'

const Item = ({ movie, handleMovieClick, currentIndex, featuredMovie }) => {
    console.log(featuredMovie, 'featured')
    return (
        <>
        <div
            key={movie.Id}
            className={`carousel-item ${featuredMovie?.Id === movie.Id ? 'active-carousel-item' : ''}`}
            onClick={() => handleMovieClick(movie)}
            style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
        >
            <img src={`../../assets/${movie.CoverImage}`} alt={movie.Title} />
        </div>
        </>
    )
}

export default Item;
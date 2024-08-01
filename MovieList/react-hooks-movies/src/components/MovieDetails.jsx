import React from 'react';

const MovieDetails = ({movie, setShowFavorites}) => {
    return (
        <div className='card bg-transparent text-white d-flex align-items-center
        ' >
            <h1>Movie Details</h1>
            <h2>Title: {movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>imbd: {movie.imdbID}</p>
            <p>Type: {moveBy.Type}</p>
            <p>Poster: {movie.Poster}</p>
            <button onClick={() => setShowFavorites(null)}>Back</button>
        </div>
    );
};


export default MovieDetails;

import React from 'react'
import PropTypes from 'prop-types';


const FavoriteMovies = ({favorites}) => {

    return(
        <>
        <div className="row">
        <h2>Favorite Movies</h2>
        {favorites.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3' key={index}>
                <ul>
                    <li>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        {movie.Title} ({movie.Year})
                    </div>
                    </li>
                </ul>
            </div>
        ))}
        </div>
        </>
    )
    
}
FavoriteMovies.propTypes = {
    favorites: PropTypes.array.isRequired,
  };

export default FavoriteMovies;
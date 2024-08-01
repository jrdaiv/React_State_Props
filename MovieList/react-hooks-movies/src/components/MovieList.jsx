import React from 'react'
import PropTypes from 'prop-types';

const MovieList = ({movies, addRemoveButton, setShowFavorites}) => {

    return (
        <>
            {movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index} >
                    <ul>
                        <li>
                        <img src={movie.Poster} onClick={() => setShowFavorites(movie)} alt={movie.Title} />
                        <div className="overlay d-flex align-items-center justify-content-center">
                        <div>
                        {addRemoveButton(movie)}
                        </div>
                        </div>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                
            ))}
            
        </>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    addRemoveButton: PropTypes.func.isRequired 
}


export default MovieList;










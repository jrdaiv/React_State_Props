import React from 'react'

const MovieList = (props) => {

    const addRemoveButton = props.addRemoveButton

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index}>
                    <ul>
                        <li>
                        <img src={movie.Poster} alt='movie' />
                        <div className="overlay d-flex align-items-center justify-content-center">
                            <AddRemoveButtons/>
                        </div>
                        </li>
                        <li>
                            <button>Add Fav</button>
                            <button>Remove Fav</button>
                            {/* {movie.Title} ({movie.Year})
                            <button onClick={() => toggleDetails(index)}>
                                {visibleDetails[index] ? 'Hide Details' : 'Show Details'}
                            </button>  */}
                        </li>
                    </ul>
                </div>
            ))}
        </>
    );
}

export default MovieList;










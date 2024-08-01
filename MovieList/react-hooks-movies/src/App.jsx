import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/App.css'
import MovieList from './components/MovieList'
import MovieListHeader from './components/MovieListHeader'
import SearchBar from './components/SearchBar'
import AddRemoveButtons from './components/AddFavorites'
import FavoriteMovies from './components/FavoriteMovies'
import MovieDetails from './components/MovieDetails'
// import MovieDetails from './components/MovieDetails'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(null)

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f4d43e60`;

    try{
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    }catch(error){
      console.error(error);
    }

  }


  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);



  const addFavoriteMovie = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  };


  return (
    <div className="container-fluid Movie-App">
      {showFavorites ? (
        <MovieDetails movie={showFavorites} setShowFavorites={setShowFavorites} />
      ) : (
        <>
          <div className="row d-flex align-items-center mt-3 mb-3">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className="row">
            <MovieList
              movies={movies}
              addRemoveButton={(movie) => (
                <AddRemoveButtons
                  movie={movie}
                  addFavoriteMovie={addFavoriteMovie}
                  removeFavoriteMovie={removeFavoriteMovie}
                />
              )}
              setShowFavorites={setShowFavorites}
            />
          </div>
          <div className="row">
            <FavoriteMovies favorites={favorites} />
          </div>
        </>
      )}
    </div>
  );
};

export default App
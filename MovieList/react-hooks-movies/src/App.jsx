import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/App.css'
// import './components/MovieList'
// import './components/MovieListHeader'
import MovieList from './components/MovieList'
import MovieListHeader from './components/MovieListHeader'
import SearchBar from './components/SearchBar'
import AddRemoveButtons from './components/AddFavorites'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f4d43e60`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }


  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);


  return (
    <>
  <div>
    <div className="container-fluid Movie-App">
      <div className="row d-flex align-items-center mt-3 mb-3">
        {/* <MovieListHeader></MovieListHeader> */}
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>_
      <div className="row">
        <MovieList movies={movies} addRemoveButton={AddRemoveButtons} ></MovieList>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
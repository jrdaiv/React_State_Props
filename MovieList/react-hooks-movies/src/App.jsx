import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/App.css'
// import './components/MovieList'
// import './components/MovieListHeader'
import MovieList from './components/MovieList'
import MovieListHeader from './components/MovieListHeader'

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=f4d43e60';

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search)
  }

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <>
  <div>
    <div className="container-fluid Movie-App">
      <div className="row">
        <MovieListHeader></MovieListHeader>
      </div>
      <div className="row">
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  </div>
    </>
  )
}

export default App

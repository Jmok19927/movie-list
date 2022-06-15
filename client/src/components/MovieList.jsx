import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({allMovies,matchingMovies}) => (
  <div className="movieList">
    <h1>MovieList</h1>
    {matchingMovies.map((item, index) =>
      <MovieListEntry movie={item} key={index}/>
    )}
  </div>
)

export default MovieList;
import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({matchingMovies}) => (
  <div className="movieList">
    {matchingMovies.map((item, index) =>
      <MovieListEntry movie={item} key={index}/>
    )}
  </div>
)

export default MovieList;
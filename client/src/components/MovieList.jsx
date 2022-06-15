import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({matchingMovies, handleWatchClick}) => (
  <div className="movieList">
    {matchingMovies.map((item, index) =>
      <MovieListEntry movie={item} key={index} watchClick={handleWatchClick}/>
    )}
  </div>
)

export default MovieList;
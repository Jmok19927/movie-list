import React from 'react';

var MovieListEntry = ({movie}) => {
  return (
    <div className="movieEntry">
      {movie.title}
    </div>
  )
}


export default MovieListEntry;
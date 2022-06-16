import React from 'react';

var MovieListEntry = ({movie, watchClick}) => {
  return (
    <div className="movieEntry">
      {movie.title}
      {/* add a way to make this button disappear if movie.watched === undefined */}
      {movie.watched && <button style={{float:'right'}} onClick={() => watchClick(movie)}>{movie.watched}</button>}
    </div>
  )
}


export default MovieListEntry;
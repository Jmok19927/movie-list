import React, { useState } from 'react';
import MovieList from './MovieList.jsx';

var Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("All");
  var watchedMovies = [];
  var notWatchedMovies = [];
  props.matchingMovies.forEach((movie) => {
    if (movie.title === 'No movies by that name found' || movie.title === 'No movies added yet') {
      watchedMovies.push(movie);
    }

    if (movie.watched === 'Watched') {
      watchedMovies.push(movie);
    }
    else {
      notWatchedMovies.push(movie)
    }
  })

  var handleAll = () => {
    setActiveTab("All");
  }
  var handleWatched = () => {
    setActiveTab("Watched");
  }

  var handleNotWatched = () => {
    setActiveTab("Not Watched");
  }

  return (
    <div className="Tab">
      <ul className="nav">
        <li className={activeTab === "All" ? "active" : ""} onClick={handleAll}>All Movies</li>
        <li className={activeTab === "Watched" ? "active" : ""} onClick={handleWatched}>Watched</li>
        <li className={activeTab === "Not Watched" ? "active" : ""} onClick={handleNotWatched}>Not Watched</li>
      </ul>
      <div className="outlet">
        {activeTab === "All" && <MovieList matchingMovies={props.matchingMovies} handleWatchClick={props.handleWatchClick} />}
        {activeTab === "Watched" && <MovieList matchingMovies={watchedMovies} handleWatchClick={props.handleWatchClick} />}
        {activeTab === "Not Watched" && <MovieList matchingMovies={notWatchedMovies} handleWatchClick={props.handleWatchClick} />}

      </div>
    </div>
  )
}



export default Tabs;
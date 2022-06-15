import React from 'react';

var SearchMovie = (props) => {

    return (
    <form className="search">
      <label>
        <input id="search" type="text" placeholder={'Search...'} className="forminput" value={''}/>
      </label>
      <input type="submit" value="Go!" className="forminput"/>
    </form>
  )
}

export default SearchMovie;
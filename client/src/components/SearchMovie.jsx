import React from 'react';

var SearchMovie = (props) => {

    return (
    <form className="search" onSubmit={props.submit}>
      <label>
        <input className="input" type="text" placeholder={'Search...'} defaultValue={''} onChange={props.change}/>
      </label>
      <input type="submit" value="Go!" className="submitButton" />
    </form>
  )
}

export default SearchMovie;
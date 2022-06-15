import React from 'react';

var SearchMovie = (props) => {

    return (
    <form className="search" onSubmit={props.submit}>
      <label>
        <input id="search" type="text" placeholder={'Search...'} className="forminput" defaultValue={''} onChange={props.change}/>
      </label>
      <input type="submit" value="Go!" className="forminput" />
    </form>
  )
}

export default SearchMovie;
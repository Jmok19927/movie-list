import React from 'react';

var AddMovie = (props) => {
  return(
    <form className="addmovie" onSubmit={props.submit}>
      <label>
        <input className="input" placeholder="Add movie title here" defaultValue='' onChange={props.change}></input>
      </label>
      <input className="submitButton" type="submit" value="Add"></input>
    </form>
  )
}



export default AddMovie;
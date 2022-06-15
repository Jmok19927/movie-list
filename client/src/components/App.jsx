import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx';

// const App = (props) => (
//   <div>Hello World!</div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
      ],
      allMovies: [
        {title: 'No movies added yet'},
      ],
      query: '',
      addingMovie: '',
    }
  }

  componentDidMount() {
    this.setState({movieList: this.state.allMovies.slice()})
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    var matchingMovies = [];
    this.state.allMovies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        matchingMovies.push(movie);
      }
    })
    if(matchingMovies.length > 0) {
      this.setState({movieList: matchingMovies});
    } else {
      this.setState({movieList:[{title: 'No movies by that name found'}]})
    }

  }

  handleSearchChange(event) {
    this.setState({
      query:event.target.value
    })
  }

  handleAddSubmit(event) {
    event.preventDefault();
    var movieList = this.state.allMovies;
    //add a check if the movie is already in the movie list
    if (this.state.addingMovie != '') {
      var newMovie = {title: this.state.addingMovie};
      if (this.state.allMovies[0].title === 'No movies added yet') {
        movieList[0] = newMovie;
      } else {
        movieList.push(newMovie);
      }
      this.setState({allMovies: movieList});
      this.setState({movieList: this.state.allMovies})
    }
  }

  handleAddChange(event) {
    this.setState({addingMovie: event.target.value})
  }


  render() {
    return (<div>
      <h1>MovieList</h1>
      <AddMovie submit={this.handleAddSubmit.bind(this)} change={this.handleAddChange.bind(this)}/>
      <SearchMovie allMovies={this.state.allMovies} matchingMovies={this.state.movieList} submit={this.handleSearchSubmit.bind(this)} change={this.handleSearchChange.bind(this)}/>
      <MovieList matchingMovies={this.state.movieList}/>

    </div>
)
  }
}

export default App;
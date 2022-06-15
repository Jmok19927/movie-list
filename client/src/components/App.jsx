import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';

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
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
    }
  }

  componentDidMount() {
    this.setState({movieList: this.state.allMovies.slice()})
  }

  handleSubmit(event) {
    event.preventDefault();
    var matchingMovies = [];
    this.state.allMovies.forEach((movie) => {
      if (movie.title.includes(this.state.query)) {
        matchingMovies.push(movie);
      }
    })
    console.log(event)
    this.setState({movieList: matchingMovies});

  }


  render() {
    return (<div>Hello World!
      <SearchMovie allMovies={this.state.allMovies} matchingMovies={this.state.movieList} submit={this.handleSubmit.bind(this)}/>
      <MovieList matchingMovies={this.state.movieList}/>

    </div>
)
  }
}

export default App;
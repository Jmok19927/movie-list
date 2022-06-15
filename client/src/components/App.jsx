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
      query: '',
    }
  }

  componentDidMount() {
    this.setState({movieList: this.state.allMovies.slice()})
  }

  handleSubmit(event) {
    event.preventDefault();
    var matchingMovies = [];
    this.state.allMovies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        matchingMovies.push(movie);
      }
    })
    console.log(this.state.query)
    this.setState({movieList: matchingMovies});
  }

  handleChange(event) {
    this.setState({
      query:event.target.value
    })
  }


  render() {
    return (<div>Hello World!
      <SearchMovie allMovies={this.state.allMovies} matchingMovies={this.state.movieList} submit={this.handleSubmit.bind(this)} change={this.handleChange.bind(this)}/>
      <MovieList matchingMovies={this.state.movieList}/>

    </div>
)
  }
}

export default App;
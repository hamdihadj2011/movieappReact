import React, { Component } from 'react';
import './App.css';
import Movielist from './Movielist';
import Search from './Search';
import Filter from './filterrating'



const theMoviesList=[
  {
    id:1,
    title:'Game of throne',
    img:'data:image/jpeg;base64,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',
    year:'2016',
    rate:'5'
  },
  {
    id:2,
    title:'Inception',
    img:'http://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
    year:'2010',
    rate:'4'
  },
  {
    id:3,
    title:'Lord of the Rings',
    img:'https://upload.wikimedia.org/wikipedia/en/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg',
    year:'2007',
    rate:'3'
  },
  {
    id:4,
    title:'Harry Poter',
    img:'https://s-media-cache-ak0.pinimg.com/originals/b5/c9/d7/b5c9d7a1c5b90b927e82c6a47b4264a5.jpg',
    year:'2008',
    rate:'2'
  },
  {
    id:5,
    title:'Prison Break',
    img:'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Prison_Break_season_1_dvd.jpg/220px-Prison_Break_season_1_dvd.jpg',
    year:'2007',
    rate:'1'
  },
]




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      rating: 1,
      movies: theMoviesList,
      title: ''
    }
  }
  

  
  filterMovie() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.rating &&
        el.title.toLocaleLowerCase().includes(this.state.title.toLocaleLowerCase())
      )
  }

  addNewMovie=(newmovie)=>
  { 
    
    this.setState({ movie : this.state.movie.concat(newmovie) }) 
    
  }

 filter=(nameF)=>{
  this.setState({
    title: nameF
  })
 }

 setRate =(r)=>{ this.setState({ rating: r})}
  
  render() {
    return (
      <div className='App' >
        <Search  className='search' value={this.state.title}
        onChange={(newNameFilter) =>this.filter(newNameFilter)}
        />
        <Filter rate={this.state.rating}  changingRate={(r) => this.setRate(r)}/>
        
        <div className="movie-container">
          
          <Movielist moviesList={this.filterMovie()} onAddMovie={(newMovie) => this.addNewMovie(newMovie)} className='movielist'/>
        </div>
        
      </div>
    );
  }
}

export default App;

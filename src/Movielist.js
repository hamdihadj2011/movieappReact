import React from 'react';
import MovieCard from './Moviecard';
import AddMovie from './addMovie';
import LoaderHOC from './Loader'

import './MovieList.css'


const Movielist =({moviesList,newmovie=()=>{}}) =>{
    return(
<div className="list">
    {
        moviesList.map((currentmovie,i)=>
    
        
        <MovieCard movieList={currentmovie} key={i} />)
    }
<AddMovie newmovie={newmovie}  />
</div>
)
       
        
    
}
 
export default LoaderHOC(Movielist);
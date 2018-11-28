import React from 'react'
import Rat from'./Rating.js'
import './MovieCard.css'



const MovieCard =({movieList}) =>{
return(
    <div id={movieList.id} className="movie">
    <img  src={movieList.img} alt='imagea'/>
    <div className='movie-name'>
        <span>{movieList.title}</span>
        <span>{movieList.year}</span>
    </div>
    <Rat count={movieList.rate}/>

    </div>
)
}
 
export default MovieCard;
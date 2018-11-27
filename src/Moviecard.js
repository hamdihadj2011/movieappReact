import React from 'react'
import Rat from'./Rating.js'
import './MovieCard.css'

// class MovieCard extends Component {
    
//     render() { 
//         return ( 
//             <div className='movie'>
//             </div>
//          );
//     }
// }

const MovieCard =({movieList}) =>{
return(
    <div id={movieList.id} className="movie">
    <img  src={movieList.img} alt='imagea'/>
    <div className='movie-name'>
        <span>{movieList.title}</span>
        <span>{movieList.year}</span>
    </div>
    <Rat count={movieList.rate} className='raatee'/>

    </div>
)
}
 
export default MovieCard;
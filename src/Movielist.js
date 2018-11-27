import React from 'react';
import MovieCard from './Moviecard';
import AddMovie from './addMovie'

import './MovieList.css'


// class Movielist extends Component {
//     constructor(props){
//         super(props)
//     }
//     state = {  }
//     render() { 
//         return (  

//         );
//     }
// }

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
 
export default Movielist;
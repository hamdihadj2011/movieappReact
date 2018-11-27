import React from 'react'
const Rat = ({count,onchangeRating=()=>{}}) => {
    let ratdisplay = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
          
            ratdisplay.push(<span onClick={()=>onchangeRating(i+1) }> ⭐ </span>);
        }
        else {
         
            ratdisplay.push(<span onClick={()=>onchangeRating(i+1)} > - </span>);
        }
    }
    return (
        <span>{ratdisplay}</span>
    )
}

export default Rat
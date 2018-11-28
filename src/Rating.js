import React from 'react'
const Rat = ({count,change=()=>{}}) => {
    let ratdisplay = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
          
            ratdisplay.push(<span onClick={()=>change(i+1) }> ⭐ </span>);
        }
        else {
         
            ratdisplay.push(<span onClick={()=>change(i+1)} > - </span>);
        }
    }
    return (
        <span>{ratdisplay}</span>
    )
}

export default Rat
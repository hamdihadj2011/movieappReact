import React from 'react'
import Rat from './Rating'
const Filter =(props) =>{
    return(
        <div>
            <p>Minimum Rating</p>
            <p>

                <Rat count={props.rate} onchangeRating={props.changeRating}/>

            </p>
        </div>
    )
}


export default Filter
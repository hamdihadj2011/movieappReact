import React from 'react'
import Rat from './Rating'
const Filter =({changingRate, rate}) =>{
    return(
        <div>
            <p>Minimum Rating</p>
            <p>

                <Rat count={rate} change={(r) =>{  changingRate(r) }}/>

            </p>
        </div>
    )
}


export default Filter
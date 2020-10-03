import React from 'react';

function Dinner(props){
    return (
        <div>
            <h1>Today we are serving you {props.dishName}</h1>
          <h1>Today we are also serving Sweet dish you {props.sweetDish}</h1>
          <h2>Thank you SIR {props.teachers}</h2>
         </div>   
    )
}

export default Dinner;
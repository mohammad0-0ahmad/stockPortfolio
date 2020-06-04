import React from "react";
import '../css/CurrentUpdate.css'
const CurrentUpdate = ({value,date}) =>{
    return (
        <div className='CurrentUpdate'>
            <h1>{value}</h1>
            <p>{date}</p>
        </div>
      );
};

export default CurrentUpdate;
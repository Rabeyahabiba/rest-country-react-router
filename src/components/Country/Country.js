import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital} = props.country;
    const countryStyle ={
        border : '1px solid purple',
        margin : '20px',
        padding : '20px',
        borderRadius : '20px',
    }
    return (
        <div style ={countryStyle}>
             <h2> Name : {name}</h2>
              <p> Capital :{capital}</p>
              <Link to = {`country/${name}`}>
              <button> Show Detail of : {name} </button>
              </Link>
        </div>
    );
};

export default Country;
import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const {flag, name, capital, } = props.country;
   
    return (
        <div className = "countries-container">
            <img src={flag} alt="flag" />
             <h2> Name : {name}</h2>
              <p> Capital :{capital}</p>
              <Link to = {`country/${name}`}>
              <button> Show Details </button>
              </Link>
        </div>
    );
};

export default Country;
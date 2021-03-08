import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name} = useParams ();
    const [country, setCountry] = useState ({});
    useEffect ( () => {
            const url =`https://restcountries.eu/rest/v2/name/${name}`;
            fetch (url) 
            .then (res => res.json())
            .then (data => setCountry(data));
    }, [])
    return (
        <div>
            <p> Country Detail: {name}</p>
            <h3>{country.name}</h3>
            <p>{country.email} </p>
            <p> {country.phone}</p>
        </div>
    );
};

export default CountryDetails;
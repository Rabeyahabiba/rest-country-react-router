import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css'

const CountryDetails = () => {
    const { name } = useParams()
    const [country, setCountry] = useState([])

    // const { name, flag, capital,population,region, subregion  } = country;
    
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [name])
    return (
        <div className="country-detail">
            <img src={country.flag} alt="" />
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Currency: {country.currencies?.map(currency => <span> {currency.name}</span>)}</p>
            <p>Languages: {country.languages?.map(language => <span> {language.name}</span>)}</p>
            <p>Border: {country.borders?.map(border => <span> {border}</span>)}</p>
            
        </div>
    );
};

export default CountryDetails;
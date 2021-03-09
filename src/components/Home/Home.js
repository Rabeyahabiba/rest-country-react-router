import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [countries, setCountries] = useState([])
  useEffect ( () => {
           fetch ('https://restcountries.eu/rest/v2/all')
           .then (res => res.json())
           .then (data => setCountries(data))
  }, [])
    return (
        <div className="home-container">
             
      {
        countries.map (country => <Country key={country.alpha3Code} country = {country}> </Country>)
      }
        </div>
    );
};

export default Home;

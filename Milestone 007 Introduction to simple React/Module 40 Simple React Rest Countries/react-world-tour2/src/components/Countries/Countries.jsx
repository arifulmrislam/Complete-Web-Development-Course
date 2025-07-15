import { useState,useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    // console.log(visitedCountries);

    //add state for flags and here we'll declare handler.
    const [visitedFlags, setVisitedFlags] = useState([]);
    

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountry = (country) => {
        // console.log('Add visited to this country!!');
        // console.log(country.name.common);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        console.log('flag adding');
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <>
        <h3>Countries:{countries.length}</h3>
        <div>
            <h5>Visited countries:{visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
        </div>
        <div className='flag-container'>
            <h5>Visited countries flags:{visitedFlags.length}</h5>
            <ul>
                {
                    visitedFlags.map((flag, idx) => <img src={flag} key={idx} alt="flags" />)
                }
            </ul>
        </div>
        <div className='countries-container'>
        
        {
            countries.map((country) => 
            <Country country={country} 
                key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}>
            </Country>)
        }
        </div>
        </>

    );
};

export default Countries;
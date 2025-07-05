import { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    // console.log(visitedCountries);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,area,cca3')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountry = country => {
        // console.log('Add this to your visited country.');
        // console.log(country.name.common);
        // setVisitedCountries(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log('flag adding')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {visitedCountries.map(country => <li key={country.cca3}>            {country.name.common}</li>)
}</ul>

            </div>
            <div className='flag-container'>
                {visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)}
            </div>
            {/* display country */}
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        country={country} 
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </>

    );
};

export default Countries;
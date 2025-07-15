import { useState } from 'react';
import './country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    //state hold
    const [visited, setVisited] = useState(false);

    // state handle
    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited ? 'divStyle' : 'non-divStyle'}`}>
            <h3 style={{ color: visited ? 'red' : 'white' }}>Name: {name?.common}</h3>
            <img src={flags?.png} alt=''></img>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>
                <small>Code: {cca3}</small>{' '}
            </p>
            <button onClick={() => handleVisitedCountry(country)}>
                Mark Visited
            </button>
            <div style={{ marginBottom: '10px' }} />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>
                Add Flag
            </button>
            <div style={{ marginBottom: '10px' }} />
            {/* button state trigger */}
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited
                ? 'I have visited this country.'
                : 'I want to visit this country.'}
        <hr/>
        <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
        </div>
    );
};

export default Country;
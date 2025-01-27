import { useState,useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    return (
        <>
        <h3>Countries:{countries.length}</h3>
        <div className='countries-container'>
        
        {
            countries.map((country) => 
            <Country country={country} 
                key={country.cca3}>
            </Country>)
        }
        </div>
        </>

    );
};

export default Countries;
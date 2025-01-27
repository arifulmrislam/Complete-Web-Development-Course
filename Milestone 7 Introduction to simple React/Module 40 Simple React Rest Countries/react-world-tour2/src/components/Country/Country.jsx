import './Country.css';
import { useState } from 'react';
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3 className='text-xl font-bold text-emerald-400 mb-3'>Country-Name: {name.common}</h3>
            <img src={flags.png} alt="flags" />
            <p className='text-xl mt-1.5 text-amber-500'>Population: {population}</p>
            <p className='text-xl mt-1.5 text-amber-800'>Area: {area}</p>
            <p className='text-xl mt-1.5 text-amber-800'>Code: {cca3}</p>
            <button onClick={handleVisited}
                className="bg-amber-500 text-white text-xl px-4 py-2 rounded-md mt-3 cursor-pointer hover:border-b-2 hover:border-blue-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Visited Button"
            >
                {visited ? 'Visited' : 'Going'}
            </button>
            <div className='text-red-600 font-bold '>
        {visited ? ' I have visited this country.✅' : 'I want to visit.❌'}
            </div>
        
        </div>
    );
};

export default Country;
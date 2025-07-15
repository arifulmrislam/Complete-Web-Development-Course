import './country.css';
export default function Country({country}){
    console.log(country);
    const {id, name, population} = country;
    return (
        <div className='country'>
            <h2>Id: {id}</h2>
            <h3>Name: {name}</h3>
            <h4>Population: {population}</h4>
        </div>
    )
}
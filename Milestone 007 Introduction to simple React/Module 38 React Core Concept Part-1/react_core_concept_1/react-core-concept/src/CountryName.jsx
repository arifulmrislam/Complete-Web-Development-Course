import Country from "./Country";
export default function CountryName({countries}){
    return(
        <div>
            <h3>Country:{countries.length}</h3>
            {
                countries.map(country =><Country country={country}></Country>)

            }
        </div>
    )
}
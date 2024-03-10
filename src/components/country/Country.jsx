import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3, region} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    // const passWithprams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? '   I have visited this country.': 'I want to visit.'}
        </div>
    );
};

export default Country;
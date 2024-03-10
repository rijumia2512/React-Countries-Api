import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedflags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log('flag');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedflags(newVisitedFlags);
    }
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                <h3>Visited Flags:</h3>
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};


export default Countries;
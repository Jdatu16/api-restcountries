import React, { useState, useEffect } from "react";

// api url
const apiUrl = "https://restcountries.com/v3.1/all";

// api resolve code
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(apiUrl);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      {countries.map((country) => {
        const { name, region, population, capital, flags, latlng } = country;
        return (
          <article key={latlng}>
            <div>
              <img src={flags["png"]} alt={name} />
              <h1>{name["common"]}</h1>
              <h3>
                Continent:<span> {region}</span>
              </h3>
              <h3>
                Capital: <span> {capital}</span>
              </h3>
              <h3>
                Population:
                <span> {population}</span>
              </h3>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Countries;

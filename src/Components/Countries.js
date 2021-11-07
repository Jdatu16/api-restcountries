import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter } from "./Filter";

// api url
const apiUrl = "https://restcountries.com/v3.1/all";

// api resolve code
export const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(apiUrl);
    const countries = await response.json();
    setCountries(countries);
    //console.log(countries);
  };
  //returning country data
  useEffect(() => {
    getCountries();
  }, []);

  const removeCountry = (latlng) => {
    const newCountry = countries.filter((country) => country.latlng !== latlng);
    setCountries(newCountry);
  };

  return (
    <>
      {<Filter />}
      <section className="grid">
        {countries.map((country) => {
          const { name, region, population, capital, flags, latlng } = country;
          return (
            <article key={latlng}>
              <div className="countries-container">
                <img className="countries-flag" src={flags["png"]} alt={name} />
                <h3>{name["common"]}</h3>
                <h4>
                  Continent:<span> {region}</span>
                </h4>
                <h4>
                  Capital: <span> {capital}</span>
                </h4>
                <h4>
                  Population:
                  <span> {population}</span>
                </h4>
                <div className="additionals">
                  <Link className="link" to={`/countries/${capital}`}>
                    More <i class="fas fa-chevron-right"></i>
                  </Link>
                  <i
                    onClick={() => removeCountry(latlng)}
                    class="fas fa-trash-alt remove-btn"
                  ></i>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

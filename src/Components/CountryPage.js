import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HOME_PATH } from "../constants/routeConstants";

import "../css/country.css";

export const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const { capital } = useParams();

  // getting Country Data

  useEffect(() => {
    const getCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      const country = await response.json();
      setCountry(country);
    };
    getCountryData();
  }, []);

  return (
    <div data-testid="countryPage-container" className="countryPage-container">
      <Link className="prev-page" to={HOME_PATH}>
        <i className="fas fa-arrow-left"> Back</i>
      </Link>
      <section className="country-container">
        {country.map((country) => {
          const {
            latlng,
            flags,
            population,
            region,
            subregion,
            capital,
            name,
            borders,
          } = country;
          return (
            <article className="country" key={latlng}>
              <div className="country-flag">
                <img src={flags["png"]} alt={name["common"]} />
              </div>
              <div className="country-details">
                <h2>{name["common"]}</h2>
                <h5>
                  Capital: <span> {capital}</span>
                </h5>
                <h5>
                  Population: <span> {population}</span>
                </h5>
                <h5>
                  Continent: <span> {region}</span>
                </h5>
                <h5>
                  Subcontinent: <span> {subregion}</span>
                </h5>
                {borders ? (
                  <div className="borders">
                    Neighbors:
                    {borders.map((border) => {
                      return <span key={border}>{border}</span>;
                    })}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

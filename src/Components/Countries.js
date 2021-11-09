import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "./Filter";

// api resolve code
export const Countries = (props) => {
  const [regions, setRegions] = useState("");
  console.log(regions);
  return (
    <>
      {<Filter setRegions={setRegions} />}
      <section className="grid">
        {props.countries
          .filter((val) => {
            if (props.searchTerm === "") {
              return val;
            } else if (
              val.name["common"]
                .toLowerCase()
                .includes(props.searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (regions === "All") {
              return val;
            } else if (
              val.region.toLowerCase().includes(regions.toLowerCase())
            ) {
              return val;
            }
          })
          .map((country) => {
            const { name, region, population, capital, flags, latlng } =
              country;
            return (
              <article key={latlng}>
                <div className="countries-container">
                  <img
                    className="countries-flag"
                    src={flags["png"]}
                    alt={name}
                  />
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
                    <i
                      onClick={() => props.removeCountry(latlng)}
                      className="fas fa-trash-alt remove-btn"
                    ></i>
                    <Link className="link" to={`/countries/${capital}`}>
                      More <i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
};

// import { useEffect, useState } from "react";

export const Filter = (props) => {
  // useEffect(() => {
  //   const getCountryByRegion = async () => {
  //     const res = await fetch(
  //       `https://restcountries.com/v3.1/region/${region}`
  //     );
  //   };
  // }, [region]);

  return (
    <section className="filter">
      <div>
        <select
          onChange={(e) => {
            props.setRegions(e.target.value);
          }}
          name="select"
          id="select"
          className="select form-st"
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

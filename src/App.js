import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import {
  CountryPageRoute,
  HomepageRoute,
  LoginPageRoute,
  RegistrationPageRoute,
  ProfilePageRoute,
} from "./Routes/";

function App() {
  //returning country data
  const apiUrl = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(apiUrl);
      const countries = await response.json();
      setCountries(countries);
    };
    getCountries();
  }, []);

  // remove country
  const removeCountry = (latlng) => {
    const newCountry = countries.filter((country) => country.latlng !== latlng);
    setCountries(newCountry);
  };

  //search
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <HomepageRoute
        removeData={removeCountry}
        data={countries}
        searchTerm={searchTerm}
      />
      <CountryPageRoute />
      <LoginPageRoute />
      <RegistrationPageRoute />
      <ProfilePageRoute />
    </>
  );
}

export default App;

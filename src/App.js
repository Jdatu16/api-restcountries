import React from "react";
import { Header } from "./Components/Header";
import { CountryPageRoute, HomepageRoute } from "./Routes/";

function App() {
  return (
    <>
      <Header />
      <HomepageRoute />
      <CountryPageRoute />
    </>
  );
}

export default App;

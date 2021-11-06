import React from "react";
import Countries from "./Components/Countries";
import { Filter } from "./Components/Filter";
import { Header } from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;

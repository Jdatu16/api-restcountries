import { Route, Routes } from "react-router";
import { CountryPage } from "../Components";

export const CountryPageRoute = () => {
  return (
    <Routes>
      <Route exact path="/countries/:capital" element={<CountryPage />} />
    </Routes>
  );
};

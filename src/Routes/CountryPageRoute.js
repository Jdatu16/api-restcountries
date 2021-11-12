import { Route, Routes } from "react-router";
import { CountryPage } from "../Components";
import { COUNTRY_PAGE_PATH } from "../constants/routeConstants";

export const CountryPageRoute = () => {
  return (
    <Routes>
      <Route exact path={COUNTRY_PAGE_PATH} element={<CountryPage />} />
    </Routes>
  );
};

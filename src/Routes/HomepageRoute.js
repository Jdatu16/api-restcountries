import { Route, Routes } from "react-router";
import { Countries } from "../Components";

export const HomepageRoute = (props) => {
  return (
    <Routes>
      <Route
        exact
        path="/home"
        element={
          <Countries
            removeCountry={props.removeData}
            countries={props.data}
            searchTerm={props.searchTerm}
          />
        }
      />
    </Routes>
  );
};

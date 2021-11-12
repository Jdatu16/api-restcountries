import { Route, Routes } from "react-router";
import { Countries } from "../Components";
import { HOME_PATH } from "../constants/routeConstants";

export const HomepageRoute = (props) => {
  return (
    <Routes>
      <Route
        exact
        path={HOME_PATH}
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

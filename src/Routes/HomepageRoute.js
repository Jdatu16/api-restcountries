import { Route, Routes as Switch } from "react-router";
import { Countries } from "../Components";

export const HomepageRoute = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Countries />} />
    </Switch>
  );
};

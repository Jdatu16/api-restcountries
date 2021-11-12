import { Route, Routes } from "react-router";
import { RegistrationPage } from "../Components/Auth/RegistrationPage";
import { SIGNUP_PAGE_PATH } from "../constants/routeConstants";

export const RegistrationPageRoute = () => {
  return (
    <Routes>
      <Route exact path={SIGNUP_PAGE_PATH} element={<RegistrationPage />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router";
import { LoginPage } from "../Components/Auth/LoginPage";
import { LOGIN_PAGE_PATH } from "../constants/routeConstants";

export const LoginPageRoute = () => {
  return (
    <Routes>
      <Route exact path={LOGIN_PAGE_PATH} element={<LoginPage />} />
    </Routes>
  );
};

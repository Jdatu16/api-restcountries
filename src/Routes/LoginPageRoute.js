import { Route, Routes } from "react-router";
import { LoginPage } from "../Components/Auth/LoginPage";

export const LoginPageRoute = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  );
};

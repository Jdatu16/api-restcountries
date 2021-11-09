import { Route, Routes } from "react-router";
import { RegistrationPage } from "../Components/Auth/RegistrationPage";

export const RegistrationPageRoute = () => {
  return (
    <Routes>
      <Route exact path="/signup" element={<RegistrationPage />} />
    </Routes>
  );
};

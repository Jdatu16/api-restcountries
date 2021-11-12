import { Route, Routes } from "react-router";
import { ProfilePage } from "../Components/Auth/ProfilePage";
import { PROFILE_PAGE_PATH } from "../constants/routeConstants";

export const ProfilePageRoute = () => {
  return (
    <Routes>
      <Route exact path={PROFILE_PAGE_PATH} element={<ProfilePage />} />
    </Routes>
  );
};

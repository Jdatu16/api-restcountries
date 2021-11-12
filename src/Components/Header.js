import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { AUTH_STATUS } from "../constants/localStorageConstants";
import {
  HOME_PATH,
  LOGIN_PAGE_PATH,
  PROFILE_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "../constants/routeConstants";
import { checkLocalStorage, removeLocalItem } from "../Helpers/localStorage";
import { Search } from "./Search";

export const Header = (props) => {
  const navigate = useNavigate();
  const loggedIn = checkLocalStorage(AUTH_STATUS);

  const guestLinks = () => {
    return (
      <div className="buttons">
        <NavLink to={SIGNUP_PAGE_PATH} className="button btn">
          Sign up
        </NavLink>
        <NavLink to={LOGIN_PAGE_PATH} className="button btn">
          Log in
        </NavLink>
      </div>
    );
  };

  const LogOut = (e) => {
    e.preventDefault();
    removeLocalItem(AUTH_STATUS);
    navigate(HOME_PATH);
  };

  const userLinks = () => {
    return (
      <div className="buttons">
        <button onClick={LogOut} className="button btn">
          Log Out
        </button>
        <NavLink to={PROFILE_PAGE_PATH} className="button btn profile">
          <i className="fas fa-user"></i>
        </NavLink>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>
            <NavLink className="navlink" to={HOME_PATH}>
              Country Checker
            </NavLink>
          </h1>
        </div>
        {<Search setSearchTerm={props.setSearchTerm} />}
        {loggedIn ? userLinks() : guestLinks()}
      </header>
    </>
  );
};

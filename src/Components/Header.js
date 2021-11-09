import { NavLink } from "react-router-dom";
import { Search } from "./Search";
export const Header = (props) => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <NavLink className="navlink" to="/home">
              Country Checker
            </NavLink>
          </h1>
        </div>
        {<Search setSearchTerm={props.setSearchTerm} />}
        <div className="buttons">
          <NavLink to="/signup" className="button btn">
            Sign up
          </NavLink>
          <NavLink to="/login" className="button btn">
            Log in
          </NavLink>
        </div>
      </header>
    </>
  );
};

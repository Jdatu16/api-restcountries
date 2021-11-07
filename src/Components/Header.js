import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <NavLink className="navlink" to="/">
              Country Checker
            </NavLink>
          </h1>
        </div>
        <div>
          <form className="form-st search">
            <input
              type="serch"
              name="search"
              id="search"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="buttons">
          <button className="btn">Sign up</button>
          <button className="btn">Log in</button>
        </div>
      </header>
    </>
  );
};

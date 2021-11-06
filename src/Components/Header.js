export const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>RestCountries Final Poject</h1>
        </div>
        <div>
          <form className="form-st search">
            <input
              type="serch"
              name="search"
              id="search"
              placeholder="Type Country Name"
            />
          </form>
        </div>
        <div className="buttons">
          <button className="btn">Sign up</button>
          <button className="button">Log in</button>
        </div>
      </header>
    </>
  );
};

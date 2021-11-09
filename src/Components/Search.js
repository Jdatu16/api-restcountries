export const Search = (props) => {
  return (
    <div>
      <form className="form-st search">
        <input
          type="serch"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete="off"
          onChange={(e) => {
            props.setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

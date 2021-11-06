export const Filter = () => {
  return (
    <section className="filter">
      <div>
        <select name="select" id="select" className="select form-st">
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
    </section>
  );
};

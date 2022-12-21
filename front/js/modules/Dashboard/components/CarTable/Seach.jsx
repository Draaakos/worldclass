const Search = ({ onFilter }) => {
  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Buscar vehículo por patente"
          onChange={onFilter}
        />

        <div className="search__icon">
          <span className="icon"><i className="fa fa-search" /></span>
        </div>
      </div>
    </div>
  );
};

export default Search;

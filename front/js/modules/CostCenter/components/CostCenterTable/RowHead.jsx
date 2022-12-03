const RowHead = ({ headers }) => {
    const places = headers.map((place, index) =>
      <div className="costcenter-table__row__item" key={`place-head-${index}`}>{place}</div>
    );
  
    return (
      <div className="costcenter-table__row">
        { places }
      </div>
    );
  };
  
  export default RowHead;
  
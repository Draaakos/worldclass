const RowHead = ({ placeOptions, gridStyle }) => {
  const places = placeOptions.map((place, index) => 
    <div className="table__row__item" key={`place-head-${index}`}>{place}</div>
  );

  return (
    <div className="table__row" style={gridStyle}>
      { places }
    </div>
  );
};

export default RowHead;
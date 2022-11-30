const RowHead = ({ headers }) => {
  const places = headers.map((place, index) =>
    <div className="car-table__row__item" key={`place-head-${index}`}>{place}</div>
  );

  return (
    <div className="car-table__row">
      { places }
    </div>
  );
};

export default RowHead;

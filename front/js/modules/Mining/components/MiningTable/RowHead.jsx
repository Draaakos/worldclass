const RowHead = ({ headers }) => {
  const places = headers.map((place, index) =>
    <div className="mining-table__row__item" key={`place-head-${index}`}>{place}</div>
  );

  return (
    <div className="mining-table__row">
      { places }
    </div>
  );
};

export default RowHead;


const RowHead = ({headers}) => {
	const places = headers.map((place, index) =>
		<div className="usertype-table__row__item" key={`place-head-${index}`}>{place}</div>
	);

  return (
    <div className="usertype-table__row">
      { places }
    </div>
  );
}

export default RowHead
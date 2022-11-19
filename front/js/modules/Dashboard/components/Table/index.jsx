import RowBody from "./RowBody";
import RowHead from "./RowHead";

const Table = ({ placeOptions, rowData, selectorList }) => {
  const gridStyle = { gridTemplateColumns: `repeat(${placeOptions.length}, 1fr)`};

  return (
    <div className="table">
      <RowHead placeOptions={placeOptions} gridStyle={gridStyle} />
      <RowBody rowData={rowData} gridStyle={gridStyle} selectorList={selectorList} />
    </div>
  );
};

export default Table;

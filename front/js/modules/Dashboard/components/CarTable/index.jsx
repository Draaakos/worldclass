import RowBody from "./RowBody";
import RowHead from "./RowHead";

const CarTable = ({ headers, data, selectors }) => (
  <div className="car-table">
    <RowHead headers={headers} />
    <RowBody data={data} selectors={selectors} />
  </div>
);

export default CarTable;

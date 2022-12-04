import RowBody from "./RowBody";
import RowHead from "./RowHead";

const CarTable = ({ headers, data, selectors, userType }) => (
  <div className="car-table">
    <RowHead headers={headers} />
    <RowBody data={data} selectors={selectors} userType={userType} />
  </div>
);

export default CarTable;

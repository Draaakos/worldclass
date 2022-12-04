import RowHead from "./RowHead";
import RowBody from "./RowBody";

const CostCenterTable = ({ headers, data, userType, onDeleteItem }) => (
    <div className="costcenter-table">
        <RowHead headers={headers} />
        <RowBody data={data} userType={userType} onDeleteItem={onDeleteItem} />
    </div>
);

export default CostCenterTable;

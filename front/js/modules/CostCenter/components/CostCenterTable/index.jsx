import RowHead from "./RowHead";
import RowBody from "./RowBody";

const CostCenterTable = ({ headers, data, selectors, userType, onDeleteItem }) => (
    <div className="costcenter-table">
        <RowHead headers={headers} />
        <RowBody data={data} selectors={selectors} userType={userType} onDeleteItem={onDeleteItem} />
    </div>
);

export default CostCenterTable;

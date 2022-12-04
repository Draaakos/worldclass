import RowHead from "./RowHead";
import RowBody from "./RowBody";

const CostCenterTable = ({ headers, data, userType }) => (
    <div className="costcenter-table">
        <RowHead headers={headers} />
        <RowBody data={data} userType={userType} />
    </div>
);

export default CostCenterTable;

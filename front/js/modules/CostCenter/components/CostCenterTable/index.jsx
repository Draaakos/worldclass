import RowHead from "./RowHead";
import RowBody from "./RowBody";

const CostCenterTable = ({headers, data}) => (
    <div className="costcenter-table">
        <RowHead headers={headers} />
        <RowBody data={data}/>
    </div>
);

export default CostCenterTable;
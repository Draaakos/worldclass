import RowHead from "./RowHead";
import RowBody from "./RowBody";

const MiningTable = ({ headers, data, userType, onDeleteItem }) => (
    <div className="mining-table">
        <RowHead headers={headers} />
        <RowBody data={data} userType={userType} onDeleteItem={onDeleteItem} />
    </div>
);

export default MiningTable;

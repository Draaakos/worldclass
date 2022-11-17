import { useState } from "react";
import EditablePlace from "./EditablePlace";

const Row = ({ data, gridStyle }) => {
  const [ payload, setPayload ] = useState(data);

  const onChange = (key, value) => {
    const _payload = { ...payload };
    _payload[key] = value;
    setPayload(_payload);
  };

  const onSend = () => {
    console.log(payload)
  }

  const rowList = Object.entries(data)
    .map((values, index) => {
      const editableKey = values[0];
      const value = values[1];

      return (
        <div className="table__row__item" key={`table-row-item-${index}`}>
          <EditablePlace editableKey={editableKey} value={value} onChange={onChange} />
        </div>
      );
    });


  return (
    <div className="table__row" style={gridStyle}>
      { rowList }
    </div>
  );
};  

const RowBody = ({ rowData, gridStyle }) => (
  <div className="table__body">
    { rowData.map((data, index) => <Row key={`row-${index}`} data={data} gridStyle={gridStyle} />)}
  </div>
);

export default RowBody;
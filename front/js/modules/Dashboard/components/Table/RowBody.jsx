import { useState } from "react";
import EditablePlace from "./EditablePlace";
import service from "../../../../services/formData";

const Row = ({ data, gridStyle }) => {
  const [ payload, setPayload ] = useState(data);

  const onChange = (key, value) => {
    const _payload = { ...payload };
    _payload[key] = value;
    setPayload(_payload);
  };

  const onSubmit = evt => {
    service.registerCar(payload)
      .then(response => console.log(response))
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
      <div className="wrapper-icons">
        <i className="fas fa-pen wrapper-icons__item" onClick={onSubmit}></i>
        <i className="fas fa-user-alt-slash wrapper-icons__item"></i>
      </div>
    </div>
  );
};  

const RowBody = ({ rowData, gridStyle }) => (
  <div className="table__body">
    { rowData.map((data, index) => <Row key={`row-${index}`} data={data} gridStyle={gridStyle} />)}
  </div>
);

export default RowBody;
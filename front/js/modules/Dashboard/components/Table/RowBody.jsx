import { useState } from "react";
import EditablePlace from "./EditablePlace";
import service from "../../../../services/formData";

const Row = ({ data, gridStyle, selectorList }) => {
  const selectors = selectorList.map(element => element.key);
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

  const rowList = Object.entries(payload)
    .map((values, index) => {
      const editableKey = values[0];
      const value = values[1];
      const isSelector = !!(selectors.indexOf(editableKey) != -1);

      if(editableKey == 'id') return null;

      let selectorData = [];
      if(isSelector) {
        const _selectorData = selectorList.find(item => item.key == editableKey);
        selectorData = _selectorData.values;
      };

      return (
        <div className="table__row__item" key={`table-row-item-${index}`}>
          <EditablePlace
            editableKey={editableKey}
            value={value}
            onChange={onChange}
            isSelector={isSelector}
            selectorOptions={selectorData}
          />
        </div>
      );
    })
    .filter(x => x)

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

Row.defaultProps = {
  selectorList: []
};

const RowBody = ({ rowData, gridStyle, selectorList }) => (console.log(rowData),
  <div className="table__body">
    {
      rowData.map((data, index) =>
        <Row
          selectorList={selectorList}
          gridStyle={gridStyle}
          key={`row-${index}`}
          data={data}
        />
      )
    }
  </div>
);

export default RowBody;

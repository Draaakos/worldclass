import { useState } from "react";
import EditableInput from "ui/EditableInput";
import Selector from "ui/Selector";
// import service from "../../../../services/formData";
// import EditableInput from "ui/EditableInput";
// import Selector from "../../../../ui/Selector";

// const Row = ({ data, gridStyle, selectorList }) => {
//   const selectors = selectorList.map(element => element.key);
//   const [ payload, setPayload ] = useState(data);
//   const [ onActiveButton, setOnActiveButton ] = useState(false);

//   const onChange = (key, value) => {
//     const _payload = { ...payload };
//     _payload[key] = value;
//     setPayload(_payload);
//     setOnActiveButton(true);
//   };

//   const onSubmit = evt => {
//     service.registerCar(payload)
//       .then(response => console.log(response))
//     setOnActiveButton(false)
//   }

//   const rowList = Object.entries(payload)
//     .map((values, index) => {
//       const editableKey = values[0];
//       const value = values[1];
//       const isSelector = !!(selectors.indexOf(editableKey) != -1);

//       if(editableKey == 'id') return null;

//       let selectorData = [];
//       if(isSelector) {
//         const _selectorData = selectorList.find(item => item.key == editableKey);
//         selectorData = _selectorData.values;
//       };

//       return (
//         <div className="table__row__item" key={`table-row-item-${index}`}>
//           <EditableInput
//             onChange={onChange}
//             isSelector={isSelector}
//             selectorOptions={selectorData}
//             editableKey={editableKey}
//             value={value}
//           />
//           {/* <Selector classes='select --active' /> */}
//         </div>
//       );
//     })
//     .filter(x => x);

//     const editButton = onActiveButton
//       ? <i className="fas fa-pen wrapper-icons__item" onClick={onSubmit}></i>
//       : null

//   return (
//     <div className="table__row" style={gridStyle}>
//       { rowList }

//       <div className="wrapper-icons">
//         {editButton}
//         <i className="fas fa-user-alt-slash wrapper-icons__item"></i>
//       </div>
//     </div>
//   );
// };

// Row.defaultProps = {
//   selectorList: []
// };

const Row = ({ data, selectors }) => (
  <div className="car-table__row">
    <div><EditableInput value={data.patent}/></div>
    <div><Selector data={selectors.carType}/></div>
    <div><EditableInput value={data.color}/></div>
    <div><Selector data={selectors.costCenter}/></div>
    <div><EditableInput value={data.carModel}/></div>
    <div>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  </div>
);

const RowBody = ({ data, selectors }) => (
  <div>
    { data.map((item, index) => <Row key={`row-${index}`} data={item} selectors={selectors} />) }
  </div>
);

export default RowBody;

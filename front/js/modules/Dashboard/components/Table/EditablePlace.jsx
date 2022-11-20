import { useEffect, useState } from "react";
import Selector from "./Selector";
// import service from "../../../../services/formData";

const EditablePlace = ({
  editableKey,
  value,
  onChange,
  isSelector,
  selectorOptions
}) => {
  // const [ isSelectorOption, setIsSelectorOption ] = useState(false);
  // const [ isInput, setIsInput ] = useState(true);

  // const [ costCenterOptions, setCostCenterOptions ] = useState([]);
  // const [ carTypeOptions, setCarTypeOptions ] = useState([]);


  // console.log(costCenterOptions)


  // const changeStates = () => {
  //   setIsSelectorOption(true)
  //   setIsInputOption(false)
  // };

  // useEffect(() => {
  //   service.fetchAllCostCenter()
  //   .then(response => setCostCenterOptions(response.data));

  //   service.fetchAllCarTypes()
  //     .then(response => setCarTypeOptions(response.data));
  // }, []);

  // <select className='table__select' onChange={evt => onChange(editableKey, evt.target.value)}></select>
  const content = isSelector ? (
    // <select className="table-selector">
    //   { selectorOptions.map(item => <option key={item.code}>{item.name}</option>) }
    // </select>
    <Selector selectorOptions={selectorOptions} defaultValue={value} editableKey={editableKey} onChange={onChange}/>
  ) : (
    <input
      // onChange={evt => onChange(editableKey, evt.target.value)}
      defaultValue={value}
      // onClick={changeStates}
    />
  );

  return <div>{content}</div>;
}

// EditablePlace.defaultProps = {
//   selectorOptions: []
// };

export default EditablePlace;

import { useEffect, useState } from "react";
import service from "../../../../services/formData";

const EditablePlace = ({ editableKey, value, onChange }) => {
  const [ isSelectorOption, setIsSelectorOption ] = useState(false);
  const [ isInputOption, setIsInputOption ] = useState(true);
  
  const [ costCenterOptions, setCostCenterOptions ] = useState([])
  const [ carTypeOptions, setCarTypeOptions ] = useState([])
  
  const changeStates = () => {
    setIsSelectorOption(true)
    setIsInputOption(false)
  };

  useEffect(() => {
    service.fetchAllCostCenter()
    .then(response => setCostCenterOptions(response.data))

    service.fetchAllCarTypes()
      .then(response => setCarTypeOptions(response.data))
  }, [])

  const select = isSelectorOption
    ?
    <select className='table__select' onChange={evt => onChange(editableKey, evt.target.value)}>
      {
        costCenterOptions.map(item => <option key={item.code}>{item.name}</option>)
      }
    </select>
    : null


  const input = isInputOption
  ?
  <input 
    onChange={evt => onChange(editableKey, evt.target.value)} 
    defaultValue={value} 
    onClick={changeStates}
  />
  : null

  return (
    <div>
      {select}
      {input}
    </div>
  );
}

export default EditablePlace;
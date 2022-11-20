import { useState } from "react";

const Selector = ({
  selectorOptions,
  defaultValue,
  editableKey,
  onChange
}) => {
  const [ selectorState, setSelectorState ] = useState(true)

  const onActiveInput = () => {
    setSelectorState(false)
  };

  const onSelectNewOption = evt => {
    onChange(editableKey, evt.target.value);
    setSelectorState(true);
  };

  const content = selectorState
    ? <div onClick={onActiveInput}>{selectorOptions.find(option => option.id == defaultValue).name}</div>
    : (
      <select className="table-selector" onChange={onSelectNewOption}>
        {
          selectorOptions.map(item => item.id == defaultValue
            ? <option value={item.id} key={item.id} selected>{item.name}</option>
            : <option value={item.id} key={item.id}>{item.name}</option>
          )
        }
      </select>
    );

  return (
    <div>{content}</div>
  )
}

Selector.defaultProps = {
    selectorOptions: []
  };

export default Selector;

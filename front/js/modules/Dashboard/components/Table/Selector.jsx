import { useState } from "react";

const Selector = ({selectorOptions, defaultValue, editableKey}) => {
  const [ selectorState, setSelectorState ] = useState(true)
  const [ selectorValue, setSelectorValue ] = useState('')

  const onActiveInput = () => {
    setSelectorState(false)
  }
  
  const onChange = (evt) => {
    setSelectorValue(evt.target.value)
  }
  
  console.log('selector value', selectorValue)
  
  const content = selectorState ? (
    <input 
      defaultValue={defaultValue}
      onClick={onActiveInput}
    />
  ) : (
    <select className="table-selector" onChange={evt => onChange(editableKey, selectorValue)}>
      { selectorOptions.map(item => <option value={item.id} key={item.id}>{item.name}</option>) }
    </select>
  )

  return (
    <div>{content}</div>
  )
}

Selector.defaultProps = {
    selectorOptions: []
  };

export default Selector;
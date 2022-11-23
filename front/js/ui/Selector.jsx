import { useState } from "react";

const Selector = ({onChange, selectorOptions, classes}) => {
   
  const [ selectorState, setSelectorState ] = useState(true) 

  const onActiveInput = () => {
    setSelectorState(false)
  };

  const content = selectorState 
    ? <div onClick={onActiveInput}>hello</div>
    : (
      <select className={`select ${classes}`} onChange={onChange}>
        {selectorOptions}
      </select>
    )

  return (
    <div>{content}</div>
  )
}

Selector.defaultProps = {
    onChange: () => {},
    selectorOptions: 'el calle',
    classes: ''
};

export default Selector;
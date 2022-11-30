import { useState } from "react";

const Selector = ({ data, onChange, value, valueKey }) => {
  const options = data
    .map((item, index) => {
      return (
        item.id == value
          ? <option key={`select-${index}`} value={item.id} selected>{item.name}</option>
          : <option key={`select-${index}`} value={item.id}>{item.name}</option>
      )
    });

  return (
    <select className="selector" onChange={evt=> onChange(valueKey, evt.target.value)}>
      { options }
    </select>
  )
}

Selector.defaultProps = {
  onChange: () => {}
};

export default Selector;

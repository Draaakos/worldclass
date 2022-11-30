import { useState } from "react";

const Selector = ({ data, onChange }) => {
  return (
    <select onChange={onChange}>
      { data.map((item, index) => <option key={`select-${index}`} value={item.value}>{item.name}</option>) }
    </select>
  )
}

Selector.defaultProps = {
  onChange: () => {}
};

export default Selector;

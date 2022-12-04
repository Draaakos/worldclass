import Selector from "./Selector";

const EditableInput = ({ onChange, valueKey, value, isEditable }) => {
  return (
    isEditable ? <input
      className="editable-input"
      type="text"
      onChange={evt => onChange(valueKey, evt.target.value)}
      defaultValue={value}
    /> : <div>{value}</div>
  )
};

EditableInput.defaultProps = {
  onChange: () => {}
};

export default EditableInput;

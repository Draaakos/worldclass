import Selector from "./Selector";

const EditableInput = ({ onChange, valueKey, value }) => {
  return (
    <input
      className="editable-input"
      type="text"
      onChange={evt => onChange(valueKey, evt.target.value)}
      defaultValue={value}
    />
  )
};

EditableInput.defaultProps = {
  onChange: () => {}
};

export default EditableInput;

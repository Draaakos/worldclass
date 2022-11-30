import Selector from "./Selector";

const EditableInput = ({ onChange, value }) => {
  return (
    <input
      type="text"
      onChange={evt => onChange(evt.target.value)}
      defaultValue={value}
    />
  )
};

EditableInput.defaultProps = {
  onChange: () => {}
};

export default EditableInput;

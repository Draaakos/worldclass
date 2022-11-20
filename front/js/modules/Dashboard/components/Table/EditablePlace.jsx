import Selector from "./Selector";

const EditablePlace = ({
  editableKey,
  value,
  onChange,
  isSelector,
  selectorOptions
}) => {
  const content = isSelector ? (
    <Selector
      selectorOptions={selectorOptions}
      defaultValue={value}
      editableKey={editableKey}
      onChange={onChange}
    />
  ) : <input onChange={evt => onChange(editableKey, evt.target.value)} defaultValue={value} />;

  return <div>{content}</div>;
};

export default EditablePlace;

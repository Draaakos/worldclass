const EditablePlace = ({ editableKey, value, onChange }) => {
  return (
    <input 
      onChange={evt => onChange(editableKey, evt.target.value)} 
      defaultValue={value} 
    />
  );
}

export default EditablePlace;
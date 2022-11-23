import Selector from "./Selector";

const EditableInput = ({onChange, isSelector, SelectorOptions, editableKey, value}) => {
  
  const content = isSelector ? (
    <Selector 
      selectorOptions={SelectorOptions} 
      defaultValue={value} 
      editableKey={editableKey} 
      onChange={onChange}
    />
    ) : <input className="editable-input__input" type="text" onChange={evt => onChange(editableKey, evt.target.value)} defaultValue={value}/>
  
  return (
    <div>{content}</div>
  )
};

export default EditableInput;

import { useState } from "react";
import classNames from "classnames";
import EditableInput from "ui/EditableInput";
import service from "../../../../services/formData";

const Row = ({ data, userType }) => {
  const [ payload, setPayload ] = useState(data);
  const [ editableActive, setEditableActive ] = useState(false);

  const editableButtonClasses = classNames([
    'button',
    'button--info'
  ], {
    'button--hidden': !editableActive
  });


  const onEdit = id => {
    return () => {
      service.updateCostCenter(payload, id)
      setEditableActive(false);
    }
  }

  const onChange = (key, value) => {
    const _payload = { ...payload };
    _payload[key] = value;
    setPayload(_payload);
    setEditableActive(true);
  };

  const onDelete = id => {
    return () => {
      service.deleteCostCenter(id)
      setEditableActive(false);
    }
  }

  const isEditable = !!(userType == 1);

  return (
    <div className="costcenter-table__row">
      <div><EditableInput isEditable={isEditable} value={data.code} valueKey="code" onChange={onChange}/></div>
      <div><EditableInput isEditable={isEditable} value={data.name} valueKey="name" onChange={onChange}/></div>
      <div className="costcenter-table__options">
        { isEditable ? <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button> : null }
        { isEditable ? <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button> : null }
      </div>
    </div>
  )
};

const RowBody = ({ data, userType }) => (
  <div>
    { data.map((item, index) => <Row key={`row-${index}`} data={item} userType={userType} />) }
  </div>
);

export default RowBody;

import { useState } from "react";
import classNames from "classnames";
import EditableInput from "ui/EditableInput";
import Selector from "ui/Selector";
import service from "../../../../services/formData";

const Row = ({ data, selectors }) => {
  const [ payload, setPayload ] = useState(data);
  const [ editableActive, setEditableActive ] = useState(false);

  const editableButtonClasses = classNames([
    'button',
    'button--info'
  ], {
    'button--hidden': !editableActive
  });

  const onChange = (key, value) => {
    const _payload = { ...payload };
    _payload[key] = value;
    setPayload(_payload);
    setEditableActive(true);
  };

  const onEdit = id => {
    return () => {
      service.updateCar(payload, id)
      setEditableActive(false);
    }
  }

  const onDelete = id => {
    return () => {
      service.deleteCar(id)
      setEditableActive(false);
    }
  }

  return (
    <div className="car-table__row">
      <div><EditableInput value={data.patent} onChange={onChange} valueKey="patent"/></div>
      <div><Selector value={data.carType} data={selectors.carType} onChange={onChange} valueKey="carType"/></div>
      <div><EditableInput value={data.color} onChange={onChange} valueKey="color"/></div>
      <div><Selector value={data.costCenter} data={selectors.costCenter} onChange={onChange} valueKey="costCenter"/></div>
      <div><EditableInput value={data.carModel} onChange={onChange} valueKey="carModel"/></div>
      <div className="car-table__options">
        <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button>
        <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button>
      </div>
    </div>
  );
};


const RowBody = ({ data, selectors }) => (
  <div>
    { data.map((item, index) => <Row key={`row-${index}`} data={item} selectors={selectors} />) }
  </div>
);

export default RowBody;

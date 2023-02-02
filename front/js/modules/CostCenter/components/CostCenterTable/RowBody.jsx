import { useState } from 'react';
import classNames from 'classnames';
import EditableInput from 'ui/EditableInput';
import Selector from 'ui/Selector';
import service from '../../../../services/formData';


const Row = ({ data, selectors, userType, onDeleteItem }) => {
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
      console.log(payload)
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
      if (confirm("¿Estás seguro de que quieres eliminar este centro de costo?")) {
        service.deleteCostCenter(id)
        setEditableActive(false);
        onDeleteItem(id);
      }
    }
  };

  const isEditable = !!(userType == 1);

  return (
    <div className="costcenter-table__row">
      <div><EditableInput isEditable={isEditable} value={data.code} valueKey="code" onChange={onChange}/></div>
      <div><EditableInput isEditable={isEditable} value={data.name} valueKey="name" onChange={onChange}/></div>
      <div><Selector isEditable={isEditable} value={data.mining.id} data={selectors.mining} valueKey="mining" onChange={onChange} /></div>
      <div className="costcenter-table__options">
        { isEditable ? <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button> : null }
        { isEditable ? <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button> : null }
      </div>
    </div>
  )
};

const RowBody = ({ data, selectors, userType, onDeleteItem }) => (
  <div>
    {
      data.map(item =>
        <Row
          key={item.id}
          data={item}
          selectors={selectors}
          userType={userType}
          onDeleteItem={onDeleteItem}
        />
      )
    }
  </div>
);


export default RowBody;

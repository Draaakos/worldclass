import { useState } from 'react';
import classNames from 'classnames';
import EditableInput from 'ui/EditableInput';
import Selector from 'ui/Selector';
import service from '../../../../services/formData';

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
      service.updateUser(payload, id)
      setEditableActive(false);
    }
  }

  const onDelete = id => {
    return () => {
      service.deleteUser(id)
      setEditableActive(false);
    }
  }

  return (
    <div className="usertype-table__row">
      <div><EditableInput value={data.username} valueKey="name" onChange={onChange} /></div>
			<div><EditableInput value={data.email} valueKey="email" onChange={onChange} /></div>
			<div><Selector value={data.personType} data={selectors.userType} valueKey="user" onChange={onChange} /></div>
      <div className="usertype-table__options">
        <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button>
        <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button>
      </div>
    </div>
  )
}

const RowBody = ({ data, selectors }) => (
  <div>
    { data.map((item, index) => <Row key={`row-${index}`} data={item} selectors={selectors}/>) }
  </div>
)

export default RowBody
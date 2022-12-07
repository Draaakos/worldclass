import { useState, useEffect } from "react";
import classNames from "classnames";
import EditableInput from "ui/EditableInput";
import Selector from "ui/Selector";
import service from "../../../../services/formData";
import DocumentForm from "./DocumentForm";
import Modal from "../Modal";

const Row = ({ data, selectors, userType, onSelectDownloadModal }) => {
  const [ payload, setPayload ] = useState(data);
  const [ editableActive, setEditableActive ] = useState(false);
  const [ carList, setCarList ] = useState([]);
  const [ isRegisterDocument, setIsRegisterDocument ] = useState(false);

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
  };

  const onDelete = id => {
    return () => {
      service.deleteCar(id)
      setEditableActive(false);
      onDeleteItem(id);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const form = new FormData();
    form.append('name', 'test');
    form.append('upload',evt.target.files[0]);

    service.uploadDocument(form, data.id)
      .then(response => console.log(response))
  }

  const modalDocument = isRegisterDocument ?
    (
      <Modal onCloseModal={() => setIsRegisterDocument(false)}>
        <DocumentForm data={data} onSubmit={onsubmit}/>
      </Modal>
    )
    : null;


  const isEditable = !!(userType == 1);

  return (
    <div className="car-table__row">
      <div><Selector isEditable={isEditable} value={data.status} data={selectors.carStatus} onChange={onChange} valueKey="status"/></div>
      <div><EditableInput isEditable={isEditable} value={data.patent} onChange={onChange} valueKey="patent"/></div>
      <div><Selector isEditable={isEditable} value={data.carType} data={selectors.carType} onChange={onChange} valueKey="carType"/></div>
      <div><EditableInput isEditable={isEditable} value={data.color} onChange={onChange} valueKey="color"/></div>
      <div><Selector isEditable={isEditable} value={data.costCenter} data={selectors.costCenter} onChange={onChange} valueKey="costCenter"/></div>
      <div><EditableInput isEditable={isEditable} value={data.carModel} onChange={onChange} valueKey="carModel"/></div>

      <div className="car-table__options" >
        {
          isEditable ? (
            <button onClick={() => setIsRegisterDocument(true)}>add document</button>
        ) : null }
        <div className="download-button">
          { data.documents.length && <div onClick={onSelectDownloadModal(data)}><img src="/static/images/download.svg" /></div> }
        </div>
        {modalDocument}
        { isEditable ? <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button> : null }
        { isEditable ? <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button> : null }
      </div>
    </div>
  );
};


const RowBody = ({ data, selectors, userType, onSelectDownloadModal}) => {
  return (
    <div>
      {
        data.map(item =>
          <Row
            key={item.id}
            data={item}
            selectors={selectors}
            userType={userType}
            onSelectDownloadModal={onSelectDownloadModal}
          />)
      }
    </div>
  );
}

export default RowBody;

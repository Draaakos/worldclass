import { useState } from "react";
import classNames from "classnames";
import EditableInput from "ui/EditableInput";
import Selector from "ui/Selector";
import service from "../../../../services/formData";
import DocumentForm from "./DocumentForm";
import Modal from "../Modal";

const Row = ({ data, selectors, userType, onSelectDownloadModal, onDeleteItem, onCloseModal }) => {
  const [ payload, setPayload ] = useState(data);
  const [ editableActive, setEditableActive ] = useState(false);
  const [ isRegisterDocument, setIsRegisterDocument ] = useState(false);
  const [ documentList, setDocumentList ] = useState([]);

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

  const onAddNewDocument = item => {
    const _payload = { ...payload };
    _payload.documents.push(item);
    setPayload(_payload);
  };

  const modalDocument = isRegisterDocument ?
    (
      <Modal onCloseModal={() => setIsRegisterDocument(false)}>
        <DocumentForm
          data={data}
          onCloseModal={() => setIsRegisterDocument(false)}
          documentList={documentList}
          setDocumentList={setDocumentList}
          onAddNewDocument={onAddNewDocument}
          selectors={selectors}
        />
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
          ) : null
        }

        <div className="download-button">
          {
            payload.documents.length
              ? <div onClick={onSelectDownloadModal(data)}>
                  <img src="/static/images/download.svg" />
                </div>
              : null
          }
        </div>

        {modalDocument}

        { isEditable ? <button className={editableButtonClasses} onClick={onEdit(data.id)}>Editar</button> : null }
        { isEditable ? <button className="button button--danger" onClick={onDelete(data.id)}>Eliminar</button> : null }
      </div>
    </div>
  );
};


const RowBody = ({ data, selectors, userType, onSelectDownloadModal, onDeleteItem, onCloseModal }) => {
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
            onDeleteItem={onDeleteItem}
            onCloseModal={onCloseModal}
          />
        )
      }
    </div>
  );
}

export default RowBody;

import { useState } from "react";
import classNames from "classnames";
import EditableInput from "ui/EditableInput";
import Selector from "ui/Selector";
import service from "../../../../services/formData";
import DocumentForm from "./DocumentForm";
import Modal from "../Modal";
import getExpiredType from 'utils/getExpiredType.js';



const countForExpiredDocument = documents => {
  let count = 0;

  documents.forEach(item => {
    if(item.hasExpired) {
      if(getExpiredType(item.expiredDate) != 4) {
        count += 1;
      }
    }
  });

  return count;
}



const verifyExpiredDocument = documents => {
  const d = new Date();

  const sixtyDays = new Date();
  sixtyDays.setUTCDate(sixtyDays.getUTCDate() + 60);

  const fortyDays = new Date();
  fortyDays.setUTCDate(fortyDays.getUTCDate() + 40);

  const twentyDays = new Date();
  twentyDays.setUTCDate(twentyDays.getUTCDate() + 20);

  let hasExpiredDocument = false;
  let nearExpiredDocument = false;
  let veryNearExpiredDocument = false;
  let expiredDocument = false;

  documents
    .filter(document => document.hasExpired)
    .forEach(document => {
      const splitedDate = document.expiredDate.split('-');
      const year = splitedDate[splitedDate.length - 1];
      const month = parseInt(splitedDate[1]) - 1;
      const date = splitedDate[0];
      const _d = new Date(year, month, date);
      if(_d.getTime() < d.getTime()){
          expiredDocument = true;
      }else if(_d.getTime() < sixtyDays.getTime()){
          nearExpiredDocument = true;
      }else if(_d.getTime() < fortyDays.getTime()){
          veryNearExpiredDocument = true;
      }else if(_d.getTime() < twentyDays.getTime()){
          hasExpiredDocument = true;
      }
    })

  return {
    expiredDocument,
    nearExpiredDocument,
    veryNearExpiredDocument,
    hasExpiredDocument
  };
}

const Row = ({
  data,
  selectors,
  userType,
  onSelectDownloadModal,
  onDeleteItem
}) => {
  const [ payload, setPayload ] = useState(data);
  const [ editableActive, setEditableActive ] = useState(false);
  const [ isRegisterDocument, setIsRegisterDocument ] = useState(false);

  const {
    expiredDocument,
    nearExpiredDocument,
    veryNearExpiredDocument,
    hasExpiredDocument
  } = verifyExpiredDocument(data.documents);

  const editableButtonClasses = classNames([
    'button',
    'button--info'
  ],
  {
    'button--hidden': !editableActive
  });

  const rowClasses = classNames({
    'car-table__row': true,
    'for-expired': expiredDocument,
    'for-near-expired': nearExpiredDocument,
    'for-very-near-expired': veryNearExpiredDocument,
    'for-has-expired': hasExpiredDocument
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
      if (confirm("¿Estás seguro de que quieres eliminar este vehículo?")) {
        service.deleteCar(id)
        setEditableActive(false);
        onDeleteItem(id);
      }
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
          setPayload={setPayload}
          payload={payload}
          onAddNewDocument={onAddNewDocument}
          selectors={selectors}
        />
      </Modal>
    )
    : null;

  const isEditable = !!(userType == 1);

  return (
    <div className={rowClasses}>
      <div>{countForExpiredDocument(data.documents)}</div>
      <div>
        <Selector
          isEditable={isEditable}
          value={data.status}
          data={selectors.carStatus}
          onChange={onChange}
          valueKey="status"
        />
      </div>

      <div>
        <EditableInput
          isEditable={isEditable}
          value={data.patent}
          onChange={onChange}
          valueKey="patent"
        />
      </div>

      <div>
        <Selector
          isEditable={isEditable}
          value={data.carType}
          data={selectors.carType}
          onChange={onChange}
          valueKey="carType"
        />
      </div>

      <div>
        <Selector
          isEditable={isEditable}
          value={data.mining}
          data={selectors.mining}
          onChange={onChange}
          valueKey="mining"
        />
      </div>

      <div>
        <Selector
          isEditable={isEditable}
          value={data.costCenter.name}
          data={selectors.costCenter}
          onChange={onChange}
          valueKey="costCenter"
        />
      </div>

      <div>
        <EditableInput
          isEditable={isEditable}
          value={data.carModel}
          onChange={onChange}
          valueKey="carModel"
        />
      </div>

      <div className="car-table__options">
        {
          isEditable || userType == 2 ? (
              <div onClick={() => setIsRegisterDocument(true)} className="car-table__options__item">
                <i className="fas fa-upload"></i>
              </div>
          ) : null
        }

        <div className="download-button">
          {
            payload.documents.length
              ? <div onClick={onSelectDownloadModal(data)} className="car-table__options__item">
                  <i className="fas fa-download"></i>
                </div>
              : null
          }
        </div>

        {modalDocument}

        {
          isEditable
            ? <div className={editableButtonClasses} onClick={onEdit(data.id)}>
                <i className="fas fa-check-circle"></i>
              </div>
            : null
        }
        {
          isEditable
            ? <div className="button button--danger" onClick={onDelete(data.id)}>
                <i className="fas fa-trash-alt"></i>
              </div>
            : null
        }
      </div>
    </div>
  );
};


const RowBody = ({
  data,
  selectors,
  userType,
  onSelectDownloadModal,
  onDeleteItem,
  onCloseModal
}) => {
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

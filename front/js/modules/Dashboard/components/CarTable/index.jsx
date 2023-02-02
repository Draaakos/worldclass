import { useState, useEffect } from "react";
import RowBody from "./RowBody";
import RowHead from "./RowHead";
import Modal from "../Modal";
import Search from "./Seach";
import service from '../../../../services/formData';

const CarTable = ({
  headers,
  data,
  selectors,
  userType,
  onDeleteItem
}) => {
  const [ currentData, setCurrentData ] = useState(data)
  const [ isModalActive, setIsModalActive ] = useState(false);
  const [ downloadFiles, setDownloadFiles ] = useState([]);
  const [ activeCarId, setActiveCarId ] = useState(null)


  const onSelectDownloadModal = datasSelected => {
    return () => {
      setIsModalActive(true);
      setDownloadFiles(datasSelected.documents);
      setActiveCarId(datasSelected.id)
    }
  };


  const onDelete = (carId, documentId) => {
    return () => {
      if (confirm("¿Estás seguro de que quieres eliminar este documento?")) {
        service.deleteDocument(carId, documentId)
        const newDownloadFiles = downloadFiles.filter(doc => doc.id !== documentId);
        const _currentData = currentData.map(carData => {
          if(carData.id == activeCarId) {
            carData.documents = newDownloadFiles;
          }
          return carData;
        })
        setCurrentData(_currentData);
        setDownloadFiles(newDownloadFiles)
      }
    }
  };


  const onFilter = (evt) => {
    setCurrentData(data
      .filter(item => item.patent.toLowerCase().includes(evt.target.value.toLowerCase()))
    );
  };


  const downloadFilesActives = downloadFiles.map((document, index) => (
    <div className="download-table__item" key={`item-${index}`}>
      <div>{document.name}</div>
      {
        document.hasExpired
          ? <div className="download-table__date">{document.expiredDate}</div>
          : <div className="download-table__noExpired">sin expiración</div>
      }
      <div>
        <div className="download-table__icon">
          <img src="/static/images/download.svg" onClick={() => window.open(document.path, '_blank')}/>
        </div>
      </div>
      <div className="button button--danger" onClick={onDelete(activeCarId, document.id)}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  ));

  return (
    <div>
      {
        isModalActive ? (
          <Modal onCloseModal={() => setIsModalActive(false)}>
            <div className="download-table">
              <div className="download-table__title">Lista de archivos</div>
              <div className="download-table__head">
                <h4>Tipo de documento</h4>
                <h4>Fecha de expiración</h4>
                <h4>Descarga Documento</h4>
                <h4>Eliminar Documento</h4>
              </div>
              { downloadFilesActives }
            </div>
          </Modal>
        ) : null
      }
      <div className="car-table">
        <section className="search-section">
          <Search onFilter={onFilter} />
        </section>
        <RowHead headers={headers} />
        <RowBody
          data={currentData}
          selectors={selectors}
          userType={userType}
          onSelectDownloadModal={onSelectDownloadModal}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  );
};

CarTable.defaultProps = {
  selectors: {
    carType: [],
    costCenter: [],
    mining: [],
    userType: []
  }
}

export default CarTable;

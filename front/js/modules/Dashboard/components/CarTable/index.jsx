import RowBody from "./RowBody";
import RowHead from "./RowHead";
import Modal from "../Modal";
import { useState } from "react";

const CarTable = ({ headers, data, selectors, userType }) => {
  const [ currentData, setCurrentData ] = useState(data)
  const [ isModalActive, setIsModalActive ] = useState(false);
  const [ downloadFiles, setDownloadFiles ] = useState(false);

  const onSelectDownloadModal = data => {
    return () => {
      setIsModalActive(true);
      setDownloadFiles(data.documents);
      console.log(data);
    }
  }

  const onFilter = (evt) => {
    const search = data.filter(item => item.patent == evt.target.value)
    setCurrentData(search)
  };


  return (
    <div>
      {
        isModalActive ? (
          <Modal onCloseModal={() => setIsModalActive(false)}>
            <div className="download-table">
              <div className="download-table__title">Lista de archivos</div>
              {
                downloadFiles.map(document => {
                  return (
                    <a href={document.path} download="file" className="download-table__item">
                      <div>{document.name}</div>
                      <div>
                        <div>
                          <img src="/static/images/download.svg" />
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </Modal>
        ) : null
      }
      <div className="car-table">
        <div className="search" >
          <label>Busqueda </label>
          <input type="text" placeholder="buscar vehiculo"  onChange={onFilter} />
        </div>
        <RowHead headers={headers} />
        <RowBody data={currentData} selectors={selectors} userType={userType} onSelectDownloadModal={onSelectDownloadModal} />
      </div>
    </div>
  );
};

CarTable.defaultProps = {
  selectors: {
    carType: [],
    costCenter: [],
    userType: []
  }
}

export default CarTable;

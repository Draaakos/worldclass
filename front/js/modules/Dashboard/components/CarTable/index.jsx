import { useState } from "react";
import RowBody from "./RowBody";
import RowHead from "./RowHead";
import Modal from "../Modal";
import Search from "./Seach";


const CarTable = ({ headers, data, selectors, userType, onDeleteItem, onCloseModal }) => {
  const [ currentData, setCurrentData ] = useState(data)
  const [ isModalActive, setIsModalActive ] = useState(false);
  const [ downloadFiles, setDownloadFiles ] = useState(false);

  const onSelectDownloadModal = data => {
    return () => {
      setIsModalActive(true);
      setDownloadFiles(data.documents);
    }
  };

  const onFilter = (evt) => {
    setCurrentData(data
      .filter(item => item.patent.toLowerCase().includes(evt.target.value.toLowerCase()))
    );
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
                      <div>{document.expiredDate}</div>
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
    userType: []
  }
}

export default CarTable;

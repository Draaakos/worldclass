import { useState, useEffect } from "react";
import NavBar from "../Dashboard/components/NavBar";
import CostCenterForm from "./components/CostCenterForm";
import service from 'services/dashboard';
import Modal from "../Dashboard/components/Modal";
import AddRegisterButton from "../Dashboard/components/AddRegisterButton";
import Table from "../Dashboard/components/Table";
import TemplatePage from "../Template";
import Footer from "../Dashboard/components/Footer";

const PLACE_OPTIONS = ['Codigo', 'Nombre', 'Opciones'];

const CostCenter = () => {
  const [ isRegisterCostCenter, setIsRegisterCostCenter ] = useState(false); 
  const [ costCenterData, setCostCenterData ] = useState({
    costCenterList: []
  });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setCostCenterData(response);
          return;
        }
      })
  }, []);

  console.log(costCenterData)

  const modal = isRegisterCostCenter 
    ? <Modal onCloseModal={() => setIsRegisterCostCenter(false)}><CostCenterForm /></Modal> 
    : null;

  const costCenterPage = (
    <div>
      {modal}
      <div className="content-wrapper">
        <div className="wrapper">
          <div className="wrapper__title">Lista de Centros de Costo</div>
          <AddRegisterButton onActiveModal={() => setIsRegisterCostCenter(true)} />
        </div>
        <Table 
          placeOptions={PLACE_OPTIONS} 
          rowData={costCenterData.costCenterList} 
        />
      </div>
    </div>
  )

  return (
    <TemplatePage>
      {costCenterPage}
    </TemplatePage>
  )
};

export default CostCenter;
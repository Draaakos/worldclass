import { useState, useEffect } from "react";
import NavBar from "../Dashboard/components/NavBar";
import CostCenterForm from "./components/CostCenterForm";
import CostCenterTable from "./components/CostCenterTable";
import service from 'services/dashboard';
import Modal from "../Dashboard/components/Modal";
import AddRegisterButton from "../Dashboard/components/AddRegisterButton";

const CostCenter = () => {
  const [ isRegisterCostCenter, setIsRegisterCostCenter ] = useState(false); 
  const [ costCenterData, setCostCenterData ] = useState({
    costcenterList: []
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

  const modal = isRegisterCostCenter 
    ? <Modal onCloseModal={() => setIsRegisterCostCenter(false)}><CostCenterForm /></Modal> 
    : null;

  return (
    <div>
      {modal}
      <NavBar />
      <div className="content-wrapper">
        <div className="wrapper">
          <div className="wrapper__title">Lista de Centros de Costo</div>
          <AddRegisterButton onActiveModal={() => setIsRegisterCostCenter(true)} />
        </div>
        <div className="table-costcenter">
          <div className="table-costcenter__item">Codigo</div>
          <div className="table-costcenter__item">Nombre</div>
          <div className="table-costcenter__item options-title">Opciones</div>
        </div>
        {
          costCenterData.costcenterList.map(item => 
            <CostCenterTable name={item.name} code={item.code}/>
          )
        }
      </div>
    </div>
  )
};

export default CostCenter;
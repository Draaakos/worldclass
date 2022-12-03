import { useState, useEffect } from "react";
import CostCenterForm from "./components/CostCenterForm";
import service from 'services/dashboard';
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import CostCenterTable from "./components/CostCenterTable";
import Button from 'ui/Button';


const PLACE_OPTIONS = ['Codigo', 'Nombre', 'Opciones'];

const CostCenter = () => {
  const [ isRegisterCostCenter, setIsRegisterCostCenter ] = useState(false);
  const [ costCenterList, setCostCenterList ] = useState([]);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setCostCenterList(response.costCenterList);
          return;
        }
      })
  }, []);

  console.log(costCenterList)

  const modal = isRegisterCostCenter
    ? <Modal onCloseModal={() => setIsRegisterCostCenter(false)}><CostCenterForm /></Modal>
    : null;

  const costCenterPage = (
    <div>
      {modal}
      <div>
        <div className="hero-dual hero-primary">
            <div>Lista de Centros de Costo</div>
            <Button text="crear nuevo" classes="button--primary" onClick={() => setIsRegisterCostCenter(true)}/>
        </div>

        <CostCenterTable headers={PLACE_OPTIONS} data={costCenterList}/>
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

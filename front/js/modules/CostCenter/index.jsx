import { useState, useEffect } from "react";
import CostCenterForm from "./components/CostCenterForm";
import service from 'services/dashboard';
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import CostCenterTable from "./components/CostCenterTable";
import Button from 'ui/Button';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';

const PLACE_OPTIONS = ['Codigo', 'Nombre', 'Faena', 'Opciones'];

const CostCenter = () => {
  const [ isRegisterCostCenter, setIsRegisterCostCenter ] = useState(false);
  const [ costCenterList, setCostCenterList ] = useState([]);
  const [ userType, setUserType ] = useState(3);
  const [ selectors, setSelectors ] = useState([]);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setCostCenterList(response.costCenterList);
          setUserType(response.userType)
          setSelectors(response.selectors)

          return;
        }
      })
  }, []);

  const onDeleteItem = id => {
    const _costCenterList = costCenterList.filter(item => item.id != id);
    setCostCenterList(_costCenterList);
  };

  const modal = isRegisterCostCenter
    ? (
      <Modal onCloseModal={() => setIsRegisterCostCenter(false)}>
        <CostCenterForm
          selectors={selectors}
          setCostCenterList={setCostCenterList}
          costCenterList={costCenterList}
          onCloseModal={() => setIsRegisterCostCenter(false)}
        />
      </Modal>
    )
    : null;

  const costCenterPage = (
    <div>
      {modal}
      <div>
        <div className="hero-dual hero-primary">
          <div>
            Lista de Centros de Costo
          </div>
          <div>
            <Button text="Crear centro de costo" classes="button--primary button--small" onClick={() => setIsRegisterCostCenter(true)}/>
          </div>
        </div>

        <CostCenterTable
          headers={PLACE_OPTIONS}
          data={costCenterList}
          selectors={selectors}
          userType={userType}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  )

  return (
    <TemplatePage navbarOptions={fetchNavbarByUserType(userType)}>
      {costCenterPage}
    </TemplatePage>
  )
};

export default CostCenter;

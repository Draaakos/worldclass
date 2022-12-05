import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import Button from 'ui/Button';

import CarTable from './components/CarTable';
import TemplatePage from '../Template';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';


const PLACE_OPTIONS = ['Patente', 'Tipo', 'Color', 'Centro de costo', 'Modelo', 'Opciones'];


const Dashboard = () => {
  const [ isRegisterCar, setIsRegisterCar ] = useState(false);
  const [ dashboardData, setDashboardData ] = useState({
    personList: [],
    carList: [],
    costCenterList: []
  });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setDashboardData(response);
          return;
        }

        window.location.assign('/');
      })
  }, []);

  // console.log('selectors', dashboardData.selectors)


  const modal = isRegisterCar && dashboardData.userType == 1
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}><CarForm selectors={dashboardData.selectors} /></Modal>
    : null;


  const buttonNewCar = dashboardData.userType == 1 ? (
    <div>
      <Button text="Crear nuevo" classes="button--primary" onClick={() => setIsRegisterCar(true)} />
    </div>
  ) : null;

  const page = (
    <div>
      <div>
        {modal}
        <div className="hero-dual hero-primary">
          <div>Lista de Vehiculos</div>
          { buttonNewCar }
        </div>

        <CarTable
          headers={PLACE_OPTIONS}
          data={dashboardData.carList}
          selectors={dashboardData.selectors}
          userType={dashboardData.userType}
        />
      </div>
    </div>
  );

  const app = <TemplatePage navbarOptions={fetchNavbarByUserType(dashboardData.userType)}>{page}</TemplatePage>;
  const defaultMessage = <span>Debes iniciar sesión</span>;
  const content = dashboardData.carList.length ? app : defaultMessage;

  return <div>{content}</div>
};

export default Dashboard;

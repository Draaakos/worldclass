import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import AddRegisterButton from './components/AddRegisterButton';

import Table from './components/Table';
import TemplatePage from '../Template';


const PLACE_OPTIONS = ['Patente', 'Tipo', 'Color', 'Centro de costo', 'Modelo', 'Opciones'];


const Dashboard = () => {
  const [ isRegisterCar, setIsRegisterCar ] = useState(false);
  const [ dashboardData, setDashboardData ] = useState({
    personList: [],
    carList: []
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


  const modal = isRegisterCar
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}><CarForm /></Modal>
    : null;


  const page = (
    <div>
      {modal}
      <div>
      </div>
        <div className='content-wrapper'>
          <div className='wrapper'>
            <div className="wrapper__title">
              Lista de Vehiculos
            </div>
            <AddRegisterButton onActiveModal={() => setIsRegisterCar(true)}/>
          </div>

          <Table
            placeOptions={PLACE_OPTIONS}
            rowData={dashboardData.carList}
            selectorList={dashboardData.selectors}
          />
        </div>
    </div>
  );

  const app = <TemplatePage>{page}</TemplatePage>;
  const defaultMessage = <span>Debes iniciar sesión</span>;
  const content = dashboardData.personList.length ? app : defaultMessage;

  return <div>{content}</div>
};

export default Dashboard;

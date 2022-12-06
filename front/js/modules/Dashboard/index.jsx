import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import Button from 'ui/Button';

import CarTable from './components/CarTable';
import TemplatePage from '../Template';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';


const PLACE_OPTIONS = ['Status', 'Patente', 'Tipo', 'Color', 'Centro de costo', 'Modelo', 'Opciones'];


const Dashboard = () => {
  const [ isRegisterCar, setIsRegisterCar ] = useState(false);
  const [ carList, setCarList ] = useState([]);
  const [ dashboardData, setDashboardData ] = useState({
    personList: [],
    carList: [],
  });


  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setDashboardData(response);
          setCarList(response.carList)
          return;
        }

        window.location.assign('/');
      })
  }, []);

  const modal = isRegisterCar && dashboardData.userType == 1
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}>
        <CarForm
          selectors={dashboardData.selectors}
          setCarList={setCarList}
          carList={carList}
          onCloseModal={() => setIsRegisterCar(false)}
        />
      </Modal>
    : null;


  const buttonNewCar = dashboardData.userType == 1 ? (
    <div>
      <Button text="Crear nuevo" classes="button--primary" onClick={() => setIsRegisterCar(true)} />
    </div>
  ) : null;

  const onDeleteItem = id => {
    const _carList = carList.filter(item => item.id != id)
    setCarList(_carList);
  }

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
          data={carList}
          selectors={dashboardData.selectors}
          userType={dashboardData.userType}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  );


  const app = <TemplatePage navbarOptions={fetchNavbarByUserType(dashboardData.userType)}>{page}</TemplatePage>;
  const defaultMessage = <span>Debes iniciar sesión</span>;
  const content = dashboardData.carList.length
    ? app
    : (
      dashboardData.userType ? <span>no hay informacion para este centro de costo</span> : defaultMessage
    );

  return <div>{content}</div>
};

export default Dashboard;

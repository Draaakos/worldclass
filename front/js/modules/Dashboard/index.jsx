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
  const [ selectors, setSelectors ] = useState([]);
  const [ userType, setUserType ] = useState(3);
  const [ documentList, setDocumentList ] = useState([]);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setCarList(response.carList)
          setSelectors(response.selectors)
          setUserType(response.userType)
          setDocumentList(response.carList)
          return;
        }

        window.location.assign('/');
      })
  }, []);

  const onDeleteItem = id => {
    const _carList = carList.filter(item => item.id != id)
    setCarList(_carList);
  }

  const modal = isRegisterCar && userType == 1
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}>
        <CarForm
          selectors={selectors}
          setCarList={setCarList}
          carList={carList}
          onCloseModal={() => setIsRegisterCar(false)}
        />
      </Modal>
    : null;


  const buttonNewCar = userType == 1 ? (
    <div>
      <Button text="Crear nuevo vehículo" classes="button--primary button--small" onClick={() => setIsRegisterCar(true)} />
    </div>
  ) : null;

  const page = (
    <div className='content-table'>
      <div>
        {modal}
        <div className="hero-dual hero-primary">
          <div>Lista de Vehiculos</div>
          { buttonNewCar }
        </div>

        <CarTable
          key={`car-table-${carList.length}`}
          headers={PLACE_OPTIONS}
          data={carList}
          selectors={selectors}
          userType={userType}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  );


  const app = <TemplatePage navbarOptions={fetchNavbarByUserType(userType)}>{page}</TemplatePage>;
  const defaultMessage = <span>Debes iniciar sesión</span>;
  const content = carList.length
    ? app
    : (
      userType ? <span>no hay informacion para este centro de costo</span> : defaultMessage
    );

  return <div>{content}</div>
};

export default Dashboard;

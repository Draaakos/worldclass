import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import NavBar from './components/NavBar';
import CarCard from './components/CarCard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import AddRegisterButton from './components/AddRegisterButton';

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
  },[]);

  const modal = isRegisterCar 
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}><CarForm /></Modal> 
    : null;


  const app = (
    <>
      {modal}
      <div>
        <NavBar />
      </div>
        <div className='content-wrapper'>
          <div className='wrapper'>
            <div className="wrapper__title">
              Lista de Vehiculos
            </div>
            <AddRegisterButton onActiveModal={() => setIsRegisterCar(true)}/>
          </div>
            <div className="table">
              <div className="content">
              <div className="content__head">Patente</div>
              <div className="content__head">Color</div>
              <div className="content__head">Modelo</div>
              <div className="content__head">Tipo</div>
              <div className="content__head">Centro de Costo</div>
              <div className="content__head">Opciones</div>
            </div>
          </div>
          {
            dashboardData.carList.map(car =>
              <CarCard
                key={car.patent}
                patent={car.patent}
                carModel={car.carModel}
                carType={car.carType}
                color={car.color}
                costCenter={car.costCenter}
              />
            )
          }
        </div>
    </>
  );

  return (
    <div>
      { dashboardData.personList.length ? app : <span>Debes iniciar sesión</span> }
    </div>
  );
};

export default Dashboard;
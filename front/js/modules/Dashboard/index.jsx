import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import service from 'services/dashboard';
import NavBar from './components/NavBar';
import CarCard from './components/CarCard';
import Modal from './components/Modal';


const Dashboard = () => {
  const [ isRegisterModalOn, setIsRegisterModalOn ] = useState(false); 
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

  const modal = isRegisterModalOn 
    ? <Modal onCloseModal={() => setIsRegisterModalOn(false)}><UserForm /></Modal> 
    : null;


  const app = (
    <>
      { modal }

      <div>
        <NavBar onActiveModal={() => setIsRegisterModalOn(true)} />
      </div>

      <div>Lista de Vehículos:</div>
      <div className='cards-wrapper'>
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
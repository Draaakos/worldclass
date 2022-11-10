import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import service from 'services/dashboard';
import NavBar from './components/NavBar';
import CarCard from './components/CarCard';


const Dashboard = () => {
  const [ dashboardData, setDashboardData ] = useState({ 
    personList: [], 
    carList: []
  });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        console.log(response)
        if(response.status == 200) {
          setDashboardData(response);
          return;
        }

        window.location.assign('/');
      })
  }, []);


  const app = (
    <>
      <div>
        <NavBar />
      </div>
      {/* <div>
        <UserForm />
      </div> */}
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
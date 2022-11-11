import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import service from 'services/dashboard';
import NavBar from './components/NavBar';
import CarCard from './components/CarCard';
import Modal from './components/Modal';

import UserTable from './components/UserTable';

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

      <div className='cards-wrapper'>
      {/* <div>
        <UserForm />
      </div> */}
        <div className='cards-wrapper'>
          <div className='title'>Lista de Vehículos:</div>
            <div className="table">
              <div className="content">
              <div className="content__head">Patente</div>
              <div className="content__head">Color</div>
              <div className="content__head">Modelo</div>
              <div className="content__head">Tipo</div>
              <div className="content__head">Centro de Costo</div>
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
        <div className="content-wrapper">
          <div className="title__userTable"> Tabla Usuarios</div>
            <div className="table__user">
              <div className="table__user__person">Nombre</div>
              <div className="table__user__person">Email</div>
              <div className="table__user__person">Tipo de usuario</div>
            </div>
            {
              dashboardData.personList.map( item =>
                <UserTable
                    username={item.username}
                    email = {item.email} 
                  />
                )
            }
        </div>
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
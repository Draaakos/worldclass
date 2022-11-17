import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import NavBar from './components/NavBar';
import CarCard from './components/CarCard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import AddRegisterButton from './components/AddRegisterButton';
// import service from 'services/formData';


import Table from './components/Table';


const PLACE_OPTIONS = ['Patente', 'Color', 'Modelo', 'Tipo', 'Centro de costo', 'Opciones'];


const Dashboard = () => {
  // const [ optionSelectTables, setOptionSelectTables ] = useState({

  // });

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
    <div>
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

          <Table 
            placeOptions={PLACE_OPTIONS} 
            rowData={dashboardData.carList} 
          />
        </div>
    </div>
  );

  return (
    <div>
      { dashboardData.personList.length ? app : <span>Debes iniciar sesión</span> }
    </div>
  );
};

export default Dashboard;
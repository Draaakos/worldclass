import { useEffect, useState } from 'react';
import service from 'services/dashboard';
import Modal from './components/Modal';
import CarForm from './components/CarForm';
import Button from 'ui/Button';

import CarTable from './components/CarTable';
import TemplatePage from '../Template';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';
import Message from './components/Message';
import AddedMessage from './components/AddedMessage';


const PLACE_OPTIONS = ['Docs\. a Expirar', 'Status', 'Patente', 'Tipo', 'Faena', 'Centro de costo', 'Modelo', 'Opciones'];

const Dashboard = () => {
  const [ showMessage, setShowMessage] = useState(false)
  const [ isRegisterCar, setIsRegisterCar ] = useState(false);
  const [ carList, setCarList ] = useState([]);
  const [ selectors, setSelectors ] = useState([]);
  const [ userType, setUserType ] = useState(3);
  const [ documentList, setDocumentList ] = useState([]);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200){
          setUserType(response.userType)
          setSelectors(response.selectors)
          setCarList(response.carList)
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

  const formModal = isRegisterCar && userType == 1
    ? <Modal onCloseModal={() => setIsRegisterCar(false)}>
        <CarForm
          selectors={selectors}
          setCarList={setCarList}
          carList={carList}
          onCloseModal={() => setIsRegisterCar(false)}
          setShowMessage={setShowMessage}
        />
      </Modal>
    : null;

  const buttonNewCar = userType == 1 ? (
    <div className='button-new-card'>
      <Button text="+" classes="button--primary button--small add" onClick={() => setIsRegisterCar(true)} />
    </div>
  ) : null;

  const messageModal = showMessage ? <Modal onCloseModal={() => setIsRegisterCar(false)}>
    <Message>
      <AddedMessage onCloseModal={() => setIsRegisterCar(false)} />
    </Message>
  </Modal> : null;

  return (
    <TemplatePage navbarOptions={fetchNavbarByUserType(userType)} title={'Lista de vehiculos'}>
      {buttonNewCar}
      {formModal}
      {messageModal}
      <CarTable
        key={`car-table-${carList.length}`}
        headers={PLACE_OPTIONS}
        data={carList}
        selectors={selectors}
        userType={userType}
        onDeleteItem={onDeleteItem}
      />
    </TemplatePage>
  )

//   const page = (
//     <div className='content-table'>
//       <div>
//         {modal}
//         <div className="hero-dual hero-primary">
//           <div>Lista de Vehiculos</div>
//         </div>

//         <CarTable
//           key={`car-table-${carList.length}`}
//           headers={PLACE_OPTIONS}
//           data={carList}
//           selectors={selectors}
//           userType={userType}
//           onDeleteItem={onDeleteItem}
//         />
//       </div>
//     </div>
//   );


//   const app = <TemplatePage navbarOptions={fetchNavbarByUserType(userType)}>{page}</TemplatePage>;
//   const defaultMessage = <span>Debes iniciar sesión</span>;
//   const content = carList.length
//     ? app
//     : (
//       userType ? <span>no hay informacion para este centro de costo</span> : defaultMessage
//     );

//   return <div>{content}</div>
};

export default Dashboard;

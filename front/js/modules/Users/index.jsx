import { useState, useEffect } from "react";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import Modal from "../Dashboard/components/Modal";
import AddRegisterButton from "../Dashboard/components/AddRegisterButton";
import Table from "../Dashboard/components/Table";
import TemplatePage from "../Template";

const PLACE_OPTIONS = ['Nombre', 'Email', 'Tipo de Usuario', 'Opciones'];

const Users = () => {
  const [ isRegisterModalOn, setIsRegisterModalOn ] = useState(false); 
  const [ userData, setUserData ] = useState({
    personList: []
  });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setUserData(response);
          return;
        }
      })
  }, []);

  const modal = isRegisterModalOn 
    ? <Modal onCloseModal={() => setIsRegisterModalOn(false)}><UserForm /></Modal> 
    : null;

  const usersPage = (
    <div>
      {modal}
      <div className="content-wrapper">
        <div className="wrapper">
          <div className="wrapper__title">
            Lista de usuarios
          </div>
          <AddRegisterButton onActiveModal={() => setIsRegisterModalOn(true)}/>
        </div>

        <Table 
          placeOptions={PLACE_OPTIONS} 
          rowData={userData.personList} 
        />

      </div>
    </div>
  )
  
  return (
    <TemplatePage>
      {usersPage}
    </TemplatePage>
  );

};

export default Users;
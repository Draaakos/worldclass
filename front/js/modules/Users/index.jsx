import { useState, useEffect } from "react";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import UserTable from "./components/UserTable";
import Button from 'ui/Button';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';


const PLACE_OPTIONS = ['Nombre', 'Email', 'Tipo de Usuario', 'Opciones'];

const Users = () => {
  const [ isRegisterModalOn, setIsRegisterModalOn ] = useState(false);
  const [ userData, setUserData ] = useState({ personList: [] });
  const [ userType, setUserType ] = useState(3);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setUserData(response);
          setUserType(response.userType)
          return;
        }
      })
  }, []);

  console.log('selector' ,userData.selectors)

  const modal = isRegisterModalOn
    ? <Modal onCloseModal={() => setIsRegisterModalOn(false)}><UserForm selectors={userData.selectors} /></Modal>
    : null;

  const usersPage = (
    <div>
      {modal}
      <div>
        <div className="hero-dual hero-primary">
          <div>
            Lista de usuarios
          </div>
          <div>
            <Button text="Crear nuevo" classes="button--primary" onClick={() => setIsRegisterModalOn(true)} />
          </div>
        </div>

        <UserTable
          headers={PLACE_OPTIONS}
          data={userData.personList}
          selectors={userData.selectors}
          userType={userType}
        />
      </div>
    </div>
  );

  return (
    <TemplatePage navbarOptions={fetchNavbarByUserType(userType)}>
      {usersPage}
    </TemplatePage>
  );

};

export default Users;

import { useState, useEffect } from "react";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import UserTable from "./components/UserTable";
import Button from 'ui/Button';


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

  console.log('userdata rowbody', userData)

  const modal = isRegisterModalOn
    ? <Modal onCloseModal={() => setIsRegisterModalOn(false)}><UserForm /></Modal>
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

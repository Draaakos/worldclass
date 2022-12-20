import { useState, useEffect } from "react";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import UserTable from "./components/UserTable";
import Button from 'ui/Button';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';
import Message from "../../ui/Message";


const PLACE_OPTIONS = ['Nombre', 'Email', 'Tipo de Usuario', 'Opciones'];

const Users = () => {
  const [ isRegisterModalOn, setIsRegisterModalOn ] = useState(false);
  const [ personList, setPersonList ] = useState([]);
  const [ userType, setUserType ] = useState(3);
  const [ selectors, setSelectors ] = useState([]);
  const [ notification, setNotification ] = useState(null);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setPersonList(response.personList);
          setUserType(response.userType)
          setSelectors(response.selectors)

          return;
        }
      })
  }, []);

  const onDeleteItem = id => {
    const _personList = personList.filter(item => item.id != id);
    setPersonList(_personList);
  }

  const modal = isRegisterModalOn
    ? <Modal onCloseModal={() => setIsRegisterModalOn(false)}>
        <UserForm
          selectors={selectors}
          personList={personList}
          setPersonList={setPersonList}
          onCloseModal={() => setIsRegisterModalOn(false)}
          notification={notification}
          setNotification={setNotification}
        />
      </Modal>
    : null;

  const usersPage = (
    <div>
      {modal}

      <Message
        notification={notification}
        setNotification={setNotification}
      />

      <div>
        <div className="hero-dual hero-primary">
          <div>
            Lista de usuarios
          </div>
          <div>
            <Button text="Crear nuevo" classes="button--primary button--small" onClick={() => setIsRegisterModalOn(true)} />
          </div>
        </div>

        <UserTable
          headers={PLACE_OPTIONS}
          data={personList}
          selectors={selectors}
          userType={userType}
          onDeleteItem={onDeleteItem}
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

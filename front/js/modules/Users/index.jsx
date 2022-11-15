import { useState, useEffect } from "react";
import NavBar from "../Dashboard/components/NavBar";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Modal from "../Dashboard/components/Modal";
import AddRegisterButton from "../Dashboard/components/AddRegisterButton";

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

  return (
    <div>

      {modal}

      <NavBar />

      <div className="content-wrapper">
        <div className="wrapper">
          <div className="wrapper__title">
            Lista de usuarios
          </div>
          <AddRegisterButton onActiveModal={() => setIsRegisterModalOn(true)}/>
        </div>
        <div className="table__user">
          <div className="table-costcenter__item">Nombre</div>
          <div className="table-costcenter__item">Email</div>
          <div className="table-costcenter__item">Tipo de Usuario</div>
          <div className="table-costcenter__item">Opciones</div>
        </div>
        {
          userData.personList.map(item => 
            <UserTable username={item.username} email={item.email} personType={item.personType} />
          )
        }
      </div>
    </div>
  );
};

export default Users;
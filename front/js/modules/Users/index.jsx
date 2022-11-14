import { useState, useEffect } from "react";
import NavBar from "../Dashboard/components/NavBar";
import service from '../../services/dashboard';
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const Users = () => {
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

  return (
    <div>
      <NavBar />
      <UserForm />

      <div className="content-wrapper">
        <div className="wrapper__title">Lista de Usuarios</div>
        <div className="table-costCenter">
          <div className="table-costCenter__item">Nombre</div>
          <div className="table-costCenter__item">Email</div>
          <div className="table-costCenter__item">Tipo de Usuario</div>
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
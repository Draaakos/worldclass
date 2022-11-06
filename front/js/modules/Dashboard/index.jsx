import { useEffect, useState } from 'react';
import service from 'services/dashboard';

const Dashboard = () => {
  const [ dashboardData, setDashboardData ] = useState({ personList: [] });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status) {
          setDashboardData(response);
          return;
        }

        window.location.assign('/');
      })
  }, []);

  console.log(dashboardData)

  const app = (
    <div className="register">
      <div className="container__register">
        <div className="container__date-register">
          <form action="" className="form__register">
            <h2>Regístrarse</h2>
            <input type="text" placeholder="Nombre completo"/>
            <input type="text" placeholder="Correo Electronico"/>
            <input type="text" placeholder="Centro de Costo"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="password" placeholder="Ingrese contraseña nuevamente"/>
            <button>Regístrarse</button>
          </form>
        </div>
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
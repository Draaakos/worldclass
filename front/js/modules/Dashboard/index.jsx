import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import service from 'services/dashboard';
import NavBar from './components/NavBar';

const Dashboard = () => {
  const [ dashboardData, setDashboardData ] = useState({ personList: [] });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        console.log(response)
        if(response.status == 200) {
          setDashboardData(response);
          return;
        }

        window.location.assign('/');
      })
  }, []);


  const app = (
    <><div>
      <NavBar />
    </div>
    <div>
      <UserForm />
    </div></>
  );

  return (
    <div>
      { dashboardData.personList.length ? app : <span>Debes iniciar sesión</span> }
    </div>
  );
};

export default Dashboard;
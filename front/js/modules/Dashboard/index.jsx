import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
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

  const app = (
    <div>
      <UserForm />
    </div>
  );

  return (
    <div>
      { dashboardData.personList.length ? app : <span>Debes iniciar sesión</span> }
    </div>
  );
};

export default Dashboard;

import service from '../../services/dashboardrh.js';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import css from './dashboard.css';


const Dashboard = () => {
  const [ workerList, setWorkerList ] = useState([]);

  useEffect(() => {
    service.initialData()
      .then(response => setWorkerList(response.workers));
  }, []);


  return (
    <div className={css.dashboard}>
      <Table list={workerList} />
    </div>
  );
};

export default Dashboard;

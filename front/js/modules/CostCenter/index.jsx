import { useState, useEffect } from "react";
import NavBar from "../Dashboard/components/NavBar";
import CostCenterForm from "./components/CostCenterForm";
import CostCenterTable from "./components/CostCenterTable";
import service from 'services/dashboard';

const CostCenter = () => {
  const [ costCenterData, setCostCenterData ] = useState({
    costcenterList: []
  });

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        if(response.status == 200) {
          setCostCenterData(response);
          return;
        }
      })
  }, []);

  return (
    <div>
      <NavBar />
      <CostCenterForm />

      <div className="content-wrapper">
        <div className="wrapper__title">Lista de Centros de Costo</div>
        <div className="table-costCenter">
          <div className="table-costCenter__item">Nombre</div>
          <div className="table-costCenter__item">Codigo</div>
        </div>
        {
          costCenterData.costcenterList.map(item => 
            <CostCenterTable name={item.name} code={item.code}/>
          )
        }
      </div>

    </div>
  )
};

export default CostCenter;
import { useState, useEffect } from "react";
import MiningForm from "./components/MiningForm";
import service from 'services/dashboard';
import Modal from "../Dashboard/components/Modal";
import TemplatePage from "../Template";
import MiningTable from "./components/MiningTable";
import Button from 'ui/Button';
import fetchNavbarByUserType from '../../utils/fetchNavbarByUserType.js';


const PLACE_OPTIONS = ['Codigo', 'Nombre', 'Opciones'];

const Mining = () => {
  const [ isRegisterMining, setIsRegisterMining ] = useState(false);
  const [ miningList, setMiningList ] = useState([]);
  const [ userType, setUserType ] = useState(3);

  useEffect(() => {
    service.fetchDashboardData()
      .then(response => {
        console.log(response);
        if(response.status == 200) {
          console.log(response)
          setMiningList(response.miningList);
          setUserType(response.userType);
          return;
        }
      })
  }, []);


  const onDeleteItem = id => {
    const _miningList = miningList.filter(item => item.id != id);
    setMiningList(_miningList);
  };


  const modal = isRegisterMining
    ? (
      <Modal onCloseModal={() => setIsRegisterMining(false)}>
        <MiningForm
          setMiningList={setMiningList}
          miningList={miningList}
          onCloseModal={() => setIsRegisterMining(false)}
        />
      </Modal>
    )
    : null;

  const miningPage = (
    <div>
      {modal}
      <div>
        <div className="hero-dual hero-primary">
            <div>Lista de Faenas</div>
            <Button text="Crear Faena" classes="button--primary button--small" onClick={() => setIsRegisterMining(true)}/>
        </div>

        <MiningTable
          headers={PLACE_OPTIONS}
          data={miningList}
          userType={userType}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  )

  return (
    <TemplatePage navbarOptions={fetchNavbarByUserType(userType)}>
      {miningPage}
    </TemplatePage>
  )
};

export default Mining;
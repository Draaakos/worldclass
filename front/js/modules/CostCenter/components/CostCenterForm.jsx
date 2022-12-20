import { useRef } from "react";
import service from '../../../services/formData';

const CostCenterForm = ({ setCostCenterList, costCenterList, onCloseModal, setNotification }) => {
  const name = useRef(null);
  const code = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    const payload = {
      name: name.current.value,
      code: code.current.value,
    };

    service.registerCostCenter(payload)
      .then(response => {
        if(response.status == 200) {
          const _costCenterList = [ ...costCenterList ];
          _costCenterList.push(response.item);
          setCostCenterList(_costCenterList);
          setNotification(true);
          onCloseModal();
        }
        else if(response.status == 500) {
          setNotification(false)
          onCloseModal();
        }
      })
  }

  return(
    <form className="form-register" onSubmit={onSubmit}>
      <h2 className="form-register__title">Agregar un centro de costo</h2>
      <label className="form-register__label" >Nombre</label>
      <input className="form-register__input" ref={name} type="text" placeholder="nombre" required />
      <label className="form-register__label" >Codigo</label>
      <input className="form-register__input" ref={code} type="text" placeholder="codigo del centro de costo" required/>
      <input className="form-register__btn" type="submit" value="Registrar" />
    </form>
  );
}

export default CostCenterForm;

import { useRef } from "react";
import service from '../../../services/formData';

const CostCenterForm = ({ selectors, setCostCenterList, costCenterList, onCloseModal }) => {
  const name = useRef(null);
  const code = useRef(null);
  const mining = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    if(mining.current.value === 'Seleccione') {
      alert("Debes seleccionar una Faena");
      return;
    }

    const payload = {
      name: name.current.value,
      code: code.current.value,
      mining: mining.current.value
    };

    service.registerCostCenter(payload)
      .then(response => {
        const _costCenterList = [ ...costCenterList ];
        _costCenterList.push(response.item.person);
        setCostCenterList(_costCenterList);
        onCloseModal();
        alert("Centro de costo credo correctamente")
      })
  }

  const miningSelector = (
    <select className="form-register__input" ref={mining}>
      <option value={null}>Seleccione</option>
      {
        selectors.mining
          .map((option, index) =>
            <option key={`option-${index}`} value={option.id}>{option.name}</option>)
      }
    </select>
  );

  return(
    <form className="form-register" onSubmit={onSubmit}>
      <h2 className="form-register__title">Agregar un centro de costo</h2>
      <label className="form-register__label" >Codigo</label>
      <input className="form-register__input" ref={code} type="text" placeholder="codigo del centro de costo" required/>
      <label className="form-register__label" >Nombre</label>
      <input className="form-register__input" ref={name} type="text" placeholder="nombre" required />
      <label className="form-register__label">Faena</label>
      {miningSelector}
      <input className="form-register__btn" type="submit" value="Registrar" />
    </form>
  );
}

export default CostCenterForm;

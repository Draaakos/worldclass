import { useRef } from "react";
import service from '../../../services/formData';

const MiningForm = ({ setMiningList, miningList, onCloseModal }) => {
  const name = useRef(null);
  const code = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    const payload = {
      name: name.current.value,
      code: code.current.value,
    };

    service.registerMining(payload)
      .then(response => {
        const _miningList = [ ...miningList ];
        _miningList.push(response.item);
        setMiningList(_miningList);
        onCloseModal();
        alert("Faena creda correctamente")
      })
  }

  return(
    <form className="form-register" onSubmit={onSubmit}>
      <h2 className="form-register__title">Agregar una Faena</h2>
      <label className="form-register__label" >Nombre</label>
      <input className="form-register__input" ref={name} type="text" placeholder="nombre" required />
      <label className="form-register__label" >Codigo</label>
      <input className="form-register__input" ref={code} type="text" placeholder="codigo de la Faena" required/>
      <input className="form-register__btn" type="submit" value="Registrar" />
    </form>
  );
}

export default MiningForm;

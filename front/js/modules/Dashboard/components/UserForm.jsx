import { useEffect, useRef, useState } from "react";
import service from 'services/formData';


const UserForm = () => {
  const [costCenterOptions, setCostCenterOptions] = useState([]);
  const name = useRef(null);
  const email = useRef(null);
  const costCenter = useRef(null);
  const password1 = useRef(null);
  const password2 = useRef(null);

  useEffect(() => {
    service.fetchAllCostCenter()
      .then(response => {
        setCostCenterOptions(response.data); 
      });
  }, []);
  
  const onSubmit = evt => {
    evt.preventDefault();

    if(costCenter.current.value === 'Seleccione') {
      alert("Debes seleccionar un centro de costo");
      return;
    }

    if(password1.current.value !== password2.current.value) {
      alert("las contraseñas deben ser iguales!");
      return;
    }

    const payload = {
      name: name.current.value,
      email: email.current.value,
      constCenter: costCenter.current.value,
      password: password1.current.value
    };

    console.log(payload);
  }

  const selector = (
    <select className="form__register__input" ref={costCenter}>
      <option value={null}>Seleccione</option>
      { 
        costCenterOptions
          .map((option, index) => 
            <option key={`option-${index}`} value={option.code}>{option.name}</option>) 
      }
    </select>
  );

  return(
    <form className="form__register" onSubmit={onSubmit}>
      <h2 className="form__register__title">Regístrarse</h2>
      <label className="form__register__label" >Nombre</label>
      <input className="form__register__input" ref={name} type="text" placeholder="Nombre completo" required />
      <label className="form__register__label" >Correo Electronico</label>
      <input className="form__register__input" ref={email} type="email" placeholder="Correo Electronico" required />
      <label className="form__register__label">Centro de Costo</label>
      {selector}
      <label className="form__register__label">Contraseña</label>
      <input className="form__register__input" ref={password1} type="password" placeholder="Contraseña" required />
      <label className="form__register__label">Repetir Contraseña</label>
      <input className="form__register__input" ref={password2} type="password" placeholder="Ingrese contraseña nuevamente" required />
      <input className="form__register__btn" type="submit" value="Registrar" />
    </form>   
  );
}

export default UserForm;
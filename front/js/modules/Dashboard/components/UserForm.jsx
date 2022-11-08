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
    <select ref={costCenter}>
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
      <h2>Regístrarse</h2>
      <input ref={name} type="text" placeholder="Nombre completo" required />
      <input ref={email} type="email" placeholder="Correo Electronico" required />
      { selector }
      <input ref={password1} type="password" placeholder="Contraseña" required />
      <input ref={password2} type="password" placeholder="Ingrese contraseña nuevamente" required />
      <input type="submit" value="Registrar"/>
    </form>
  );
}

export default UserForm;
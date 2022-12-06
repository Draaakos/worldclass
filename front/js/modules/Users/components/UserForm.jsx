import { useEffect, useRef, useState } from "react";
import service from '../../../services/formData';

const UserForm = ({ selectors, personList, setPersonList, onCloseModal }) => {
  const name = useRef(null);
  const email = useRef(null);
  const costCenter = useRef(null);
  const password1 = useRef(null);
  const password2 = useRef(null);
  const personType = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    if(costCenter.current.value === 'Seleccione') {
      alert("Debes seleccionar un centro de costo");
      return;
    }

    if(personType.current.value === 'Seleccione') {
      alert("Debes seleccionar un tipo de usuario");
      return;
    }

    if(password1.current.value !== password2.current.value) {
      alert("las contraseñas deben ser iguales!");
      return;
    }

    const payload = {
      username: name.current.value,
      email: email.current.value,
      costCenter: costCenter.current.value,
      password: password1.current.value,
      personType: personType.current.value
    };

    service.registerUser(payload)
      .then(response => {
        const _personList = [ ...personList ]
        _personList.push(response.item.person)
        setPersonList(_personList)
        onCloseModal();
      })
  }

  const costCenterSelector = (
    <select className="form-register__input" ref={costCenter}>
      <option value={null}>Seleccione</option>
      {
        selectors.costCenter
          .map((option, index) =>
            <option key={`option-${index}`} value={option.code}>{option.name}</option>)
      }
    </select>
  );

  const personTypeSelector = (
    <select className="form-register__input" ref={personType}>
      <option value={null}>Seleccione</option>
      {
        selectors.userType
          .map((option, index) =>
            <option key={`option-${index}`} value={option.id}>{option.name}</option>)
      }
    </select>
  );

  return(
    <form className="form-register" onSubmit={onSubmit}>
      <h2 className="form-register__title">Regístrar</h2>
      <label className="form-register__label" >Nombre</label>
      <input className="form-register__input" ref={name} type="text" placeholder="Nombre completo" required />
      <label className="form-register__label" >Correo Electronico</label>
      <input className="form-register__input" ref={email} type="email" placeholder="Correo Electronico" required />
      <label className="form-register__label">Centro de Costo</label>
      {costCenterSelector}
      <label className="form-register__label">Tipo de Usuario</label>
      {personTypeSelector}
      <label className="form-register__label">Contraseña</label>
      <input className="form-register__input" ref={password1} type="password" placeholder="Contraseña" required />
      <label className="form-register__label">Repetir Contraseña</label>
      <input className="form-register__input" ref={password2} type="password" placeholder="Ingrese contraseña nuevamente" required />
      <input className="form-register__btn" type="submit" value="Registrar" />
    </form>
  );
}

export default UserForm;

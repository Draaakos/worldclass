import { useRef, useState } from "react";
import service from 'services/formData';
import AddMessage from "./Message";

const CarForm = ({ selectors, carList, setCarList, onCloseModal, setShowMessage }) => {
  const patent = useRef(null);
  const mining = useRef(null);
  const carModel = useRef(null);
  const carType = useRef(null);
  const costCenter = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    if(costCenter.current.value === 'Seleccione') {
      alert("Debes seleccionar un centro de costo");
      return;
    }

    if(carType.current.value === 'Seleccione') {
      alert("Debes seleccionar un tipo de vehiculo");
      return;
    }
    if(mining.current.value === 'Seleccione') {
      alert("Debes seleccionar una faena");
      return;
    }

    const payload = {
      patent: patent.current.value,
      carType: carType.current.value,
      mining: mining.current.value,
      costCenter: costCenter.current.value,
      carModel: carModel.current.value
    };

    service.registerCar(payload)
      .then(response => {
        const _carList = [ ...carList ];
        _carList.push(response.item);
        setCarList(_carList);
        setShowMessage(true)
        onCloseModal();
      })
  }

  const miningSelector = (
    <select className="form-add__input" ref={mining}>
      <option value={null}>Seleccione</option>
      {
        selectors.mining
          .map((option, index) =>
            <option key={`option-${index}`} value={option.id}>{option.name}</option>)
      }
    </select>
  )

  const costCenterSelector = (
    <select className="form-add__input" ref={costCenter}>
      <option value={null}>Seleccione</option>
      {
        selectors.costCenter
          .map((option, index) =>
            <option key={`option-${index}`} value={option.id}>{option.name}</option>)
      }
    </select>
  );

  const carTypeSelector = (
    <select className="form-add__input" ref={carType}>
      <option value={null}>Seleccione</option>
      {
        selectors.carType
          .map((option, index) =>
            <option key={`option-${index}`} value={option.id}>{option.name}</option>)
      }
    </select>
  );

  return (
    <form className="form-add" onSubmit={onSubmit}>
      <div className="form-wrapper form-add__first-section">
        <div className="form-add__title">Agregar un vehiculo</div>
        <div className="form-add__buttons">
          <button className="form-add__button transparent">Cancelar</button>
          <button className="form-add__button color" type="submit">Agregar</button>
        </div>
      </div>
      <div className="form-wrapper form-add__second-section">
        <div className="form-add__input-wrapper">
          <label className="form-add__label" >Patente</label>
          <input className="form-add__input" ref={patent} type="text" placeholder="patente" required />
        </div>
        <div className="form-add__input-wrapper">
          <label className="form-add__label" >Modelo de vehiculo</label>
          <input className="form-add__input" ref={carModel} type="text" placeholder="modelo(opcional)" />
        </div>
        <div className="form-add__input-wrapper">
          <label className="form-add__label" >Faena</label>
          {miningSelector}
        </div>
        <div className="form-add__input-wrapper">
          <label className="form-add__label">Centro de Costo</label>
          {costCenterSelector}
        </div>
        <div className="form-add__input-wrapper">
          <label className="form-add__label">Tipo de vehiculo</label>
          {carTypeSelector}
        </div>
      </div>
    </form>
  )
}

export default CarForm;

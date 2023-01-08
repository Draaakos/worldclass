import { useRef } from "react";
import service from 'services/formData';

const CarForm = ({ selectors, carList, setCarList, onCloseModal }) => {
  const patent = useRef(null);
  const color = useRef(null);
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

    const payload = {
      patent: patent.current.value,
      carType: carType.current.value,
      color: color.current.value,
      costCenter: costCenter.current.value,
      carModel: carModel.current.value
    };

    service.registerCar(payload)
      .then(response => {
        const _carList = [ ...carList ];
        _carList.push(response.item);
        console.log(_carList)
        setCarList(_carList);
        onCloseModal();
        alert("Se ha ingreaso el vehículo correctamente")
      })
  }
  const costCenterSelector = (
    <select className="form-register__input" ref={costCenter}>
      <option value={null}>Seleccione</option>
      { 
        selectors.costCenter
          .map((option, index) => 
            <option key={`option-${index}`} value={option.id}>{option.name}</option>) 
      }
    </select>
  );

  const carTypeSelector = (
    <select className="form-register__input" ref={carType}>
      <option value={null}>Seleccione</option>
      { 
        selectors.carType
          .map((option, index) => 
            <option key={`option-${index}`} value={option.id}>{option.name}</option>) 
      }
    </select>
  );

  return(
    <form className="form-register" onSubmit={onSubmit}>
      <h2 className="form-register__title">Agregar un nuevo vehiculo</h2>
      <label className="form-register__label" >Patente</label>
      <input className="form-register__input" ref={patent} type="text" placeholder="patente" required />
      <label className="form-register__label" >Modelo y marca de vehículo</label>
      <input className="form-register__input" ref={carModel} type="text" placeholder="modelo y marca (opcional)" />
      <label className="form-register__label" >Color</label>
      <input className="form-register__input" ref={color} type="text" placeholder="color del vehiculo" required />
      <label className="form-register__label">Centro de Costo</label>
      {costCenterSelector}
      <label className="form-register__label">Tipo de vehiculo</label>
      {carTypeSelector}
      <input className="form-register__btn" type="submit" value="Registrar" />
    </form>   
  );
}

export default CarForm;
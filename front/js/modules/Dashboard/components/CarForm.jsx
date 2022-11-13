import { useEffect, useRef, useState } from "react";
import service from 'services/formData';

const CarForm = () => {
  const [costCenterOptions, setCostCenterOptions] = useState([]);
  const [carTypeOptions, setcarTypeOptions] = useState([]);
  const patent = useRef(null);
  const color = useRef(null);
  const carModel = useRef(null);
  const carType = useRef(null);
  const costCenter = useRef(null);

  useEffect(() => {
    service.fetchAllCostCenter()
      .then(response => {
        setCostCenterOptions(response.data);
        console.log(response.data)
      });

    service.fetchAllCarTypes()
    .then(response => {
      setcarTypeOptions(response.data);
      console.log(response.data)
    });
  }, []);
  
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
      .then(response => alert(response.message))
  }

  const costCenterSelector = (
    <select className="form-register__input" ref={costCenter}>
      <option value={null}>Seleccione</option>
      { 
        costCenterOptions
          .map((option, index) => 
            <option key={`option-${index}`} value={option.id}>{option.name}</option>) 
      }
    </select>
  );

  const carTypeSelector = (
    <select className="form-register__input" ref={carType}>
      <option value={null}>Seleccione</option>
      { 
        carTypeOptions
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
      <label className="form-register__label" >Modelo de vehiculo</label>
      <input className="form-register__input" ref={carModel} type="text" placeholder="modelo(opcional)" />
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
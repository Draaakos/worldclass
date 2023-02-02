import { useState } from "react";
import service from "../../../services/formData";

const CarCard = ({carModel, patent, carType, costCenter, mining}) => {
  function show (patent) {
    alert('desea eliminar este vehiculo?')
  }

  return (
    <>
      <div className="row">
        <div className="row__item">{patent}</div>
        <div className="row__item">{mining}</div>
        <div className="row__item">{carModel}</div>
        <div className="row__item">{carType}</div>
        <div className="row__item">{costCenter}</div>
        <div className="options-wrapper">
          <div onClick={show}>eliminar</div>
          <div>Editar</div>
        </div>
      </div>
    </>
  )
}

export default CarCard;

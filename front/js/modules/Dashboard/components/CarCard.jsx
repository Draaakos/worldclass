const CarCard = ({carModel, patent, carType, costCenter, color}) => {
  return (
    <>
      <div className="row">
        <div className="row__item">{patent}</div>
        <div className="row__item">{color}</div>
        <div className="row__item">{carModel}</div>
        <div className="row__item">{carType}</div>
        <div className="row__item">{costCenter}</div>
      </div>
    </> 
  )
}

export default CarCard
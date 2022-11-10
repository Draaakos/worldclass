
const CarCard = ({carModel, patent, carType, costCenter, color}) => {
  return (
    <div className="car-card">
      <div>patente: {patent}</div>
      <div>modelo de vehiculo: {carModel}</div>
      <div>tipo de vehiculo: {carType}</div>
      <div>color: {color}</div>
      <div>centro de costo: {costCenter}</div>
    </div>
  )
}

export default CarCard
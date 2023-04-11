
const AddedMessage = ({ onCloseModal }) => {
  return (
    <div className="message">
      <div className="message__box">
        <div className="message__icon">
          <img src="../.././static/images/correct.svg"/>
        </div>
        <div className="message__text">Vehiculo creado correctamente</div>
      </div>
      <div className="message__button-wrapper">
        <button onClick={onCloseModal()}>Cerrar</button>
      </div>
    </div>
  )
}

export default AddedMessage;

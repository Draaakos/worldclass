import React from 'react'

const Message = ({ notification, setNotification }) => {
  let text, iconClassName
  let contentDisplay = 'message--hidden'

  const onCloseMessage = () => {
    setNotification(null);
  };

  switch(notification) {
    case true:
      text = 'Agregado correctamente'
      iconClassName = 'fas fa-check-circle'
      contentDisplay = 'message--active'
      break;
    case false:
      text = 'Error al agregar'
      iconClassName = 'fas fa-exclamation-circle'
      contentDisplay = 'message--active'
  }

  return (
    <div className={contentDisplay}>
      <div className="message--active__content">
        <i className={iconClassName}></i>
        <div className="message--active__text">
          {text}
        </div>
        <div className='message--active__close' onClick={onCloseMessage}>
          X
        </div>
      </div>
    </div>
  )
}

export default Message;

const Modal = ({ children, onCloseModal }) => {
  return (
    <div className="modal" onClick={onCloseModal}>
      <div className="modal__content">
        <div className="card" onClick={evt => evt.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal
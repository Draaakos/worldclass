
const Modal = ({children}) => {
  const modal = getElementById('modal')
  const button = getElementById('button-open')

  return (
    <div className="modal" id="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}

export default Modal
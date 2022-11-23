const Button = ({ text, onClick, classes }) => {
  return <button className={`button ${classes}`} onClick={onClick}>{text}</button>
};

Button.defaultProps = {
  text: 'Boton',
  classes: '',
  onClick: () => {}
};

export default Button;

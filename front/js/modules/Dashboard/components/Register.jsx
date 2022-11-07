import { useRef } from "react";
import service from 'services/auth.js';


const Register = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const costCenterRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordTwoRef = useRef(null); 

  const onSubmit = evt => {
    evt.preventDefault();

  const username = usernameRef.current.value;
  const email = emailRef.current.value;
  const costCenter = costCenterRef.current.value;
  const password = passwordRef.current.value;
  const passwordTwo = passwordTwoRef.current.value;

  service.register(username, email, costCenter, password, passwordTwo)
    .then(response => console.log(response))

  };

  const x = [
    {
      name: "required",
      messages: "Este campoo es Obligatorio",
      patterns: true
    },
    {
      name: "name",
      messages: "El formato introducido no es correcto",
      patterns: /^ [A-Za-z] + $/i,
    },
    {
      name: "email",
      messages: "Debes introducir una direccion correcta",
      patterns: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    },
    {
      name: "costCenter",
      messages: "El formato ingresado no es valido",
      patterns: /^[A-Za-z0-9_-]{3,16}$/
    },
    {
      name: "password",
      messages: "Debes introducir un password de menos de 8 digitos",
      patterns: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{4,8}$/,
    },
    {
      name: "passwordTwo",
      messages: "El password ingresado no coinciden",
      patterns: {checkPassword2}
    }
  ]

  const checkPassword2 = () => {
      if(password !== passwordTwo){
        console.log('Las password no coiciden')
      } else {
        console.log('las contraseñas son iguales')
      }
    }
  }


  return(
    <form className="form__register" onSubmit={onSubmit}>
      <h2>Regístrarse</h2>
      <input type="text" placeholder="Nombre completo" required/>
      <input type="text" placeholder="Correo Electronico" required/>
      <input type="text" placeholder="Centro de Costo" required/>
      <input type="password" placeholder="Contraseña" required/>
      <input type="password" placeholder="Ingrese contraseña nuevamente" required/>
      <input type="submit" value="Registrar"/>
    </form>

  );

export default Register;


import { useRef } from "react";
import service from 'services/auth.js';
import React from "react";
import React from "react-dom";
import { useForm } from "react-hook-form"

/*const Register = () => {
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

  };*/

    const messages = {
      required: "Este campoo es Obligatorio",
      name: "El formato introducido no es correcto",
      email: "Debes introducir una direccion correcta",
      costCenter: "El formato ingresado no es valido",
      password: "Debes introducir un password de menos de 8 digitos",
      passwordTwo: "El password ingresado no coinciden"
    };

    const patterns= {
      name: /^ [A-Za-z] + $/i,
      email: /^ [a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
      costCenter: /^[a-zA-Z]+$/i,
      password: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{8,15}$/,
      passwordTwo: password = passwordTwo
    }


    export default Function Form() {
      const {
        register,
        handleSubmit,
        formState: {errors}
      } = useForm();
    }

    const onSubmit = (userInfo) => console.log(userInfo);
    console.log(errors);

 
    return(
            <form className="form__register" onSubmit={handleSubmit(onSubmit)}>
              <h2>Regístrarse</h2>
              <input name="name" className={errors.name && "error"}{...register("name", {
                required: messages.required,
                pattern: {
                  value:patterns.name,
                  messages: messages.name
                }
              })} type="text" placeholder="Nombre completo"/>

              {errors.name && <p>{errors.name.messages}<p/>}
              
              <input name="email" className={errors.email && "error"}{...register("email", {
                required: messages.required,
                pattern: {
                  value:patterns.email,
                  messages: messages.email
                }
              })} type="text" placeholder="Correo Electronico"/>

              {errors.email && <p>{errors.email.messages}<p/>}
              
              <input name="costCenter" className={errors.costCenter && "error"}{...register("costCenter", {
                required: messages.required,
                pattern: {
                  value:patterns.costCenter,
                  messages: messages.costCenter
                }
              })} type="text" placeholder="Centro de Costo"/>

              {errors.costCenter && <p>{errors.costCenter.messages}<p/>}
              
              <input name="password" className={errors.password && "error"}{...register("password", {
                required: messages.required,
                pattern: {
                  value:patterns.password,
                  messages: messages.password
                }
              })} type="password" placeholder="Contraseña"/>

              {errors.password && <p>{errors.password.messages}<p/>}
              
              <input name="passwordTwo" className={errors.passwordTwo && "error"}{...register("passwordTwo", {
                required: messages.required,
                pattern: {
                  value:patterns.passwordTwo,
                  messages: messages.passwordTwo
                }
              })} type="password" placeholder="Ingrese contraseña nuevamente"/>

              {errors.passwordTwo && <p>{errors.passwordTwo.messages}<p/>}
              
              <input type="submit" value="Registrar"/>
            </form>

    );
            }

export default Register;


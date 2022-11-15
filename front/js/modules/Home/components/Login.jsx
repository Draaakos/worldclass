import { useRef } from "react";
import service from 'services/auth.js';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    service.login(username, password)
      .then(response => {
        console.log(response)

        if(response.status) {
          window.location.assign('/dashboard');
          return;
        }
        
        alert(response.msg);
      })
  };

  return (
    <form className="login__form" onSubmit={onSubmit}>
      <input className="login__input" ref={usernameRef} type="text" placeholder="Usuario" required />
      <input className="login__input" ref={passwordRef} type="password" placeholder="Contraseña" required />
      <input className="btn" type="submit" value="Entrar" />
    </form>
  );
};

export default Login; 


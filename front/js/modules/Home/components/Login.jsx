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
    <div className="login">
      <div className="container__all">
        <div className="container__login-register">
          <form className="form__login" onSubmit={onSubmit}>
            <h2>Iniciar Sesión</h2>
            <input ref={usernameRef} type="text" placeholder="Usuario" required />
            <input ref={passwordRef} type="password" placeholder="Contraseña" required />
            <input type="submit" value="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 
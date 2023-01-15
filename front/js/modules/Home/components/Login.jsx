import { useRef, useState } from "react";
import classNames from "classnames";
import service from 'services/auth.js';

const Login = () => {
  const [ isActiveLogin, setIsActiveLogin ] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    service.login(username, password)
      .then(response => {

        if(response.status == 200) {
          window.location.assign('/dashboard');
          return;
        }

        alert(response.msg);
      })
  };

  const navbarLoginContainerClasses = classNames({
    'navbar-login__container': true,
    'navbar-login__container--active': isActiveLogin
  });

  return (
    <div className="navbar-login">
      <div className="navbar-button-login" onClick={() => setIsActiveLogin(true)}>Login</div>
      <div className={navbarLoginContainerClasses}>
        <div onClick={() => setIsActiveLogin(false)} className="login-close-button">x</div>
        <div className="login-section">
          <form className="login-form" onSubmit={onSubmit}>
            <input className="login-form__item login-form__input" ref={usernameRef} type="text" placeholder="Usuario" required />
            <input className="login-form__item login-form__input" ref={passwordRef} type="password" placeholder="Contraseña" required />
            <input className="login-form__item login-form__button" type="submit" value="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


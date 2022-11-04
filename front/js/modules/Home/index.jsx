const Home = () => {

  return(
    <div>
      <main className="login">
        <div className="container__all">
          <div className="container__login-register">
            <form action="./index.html" className="form__login">
              <h2>Iniciar Sesión</h2>
              <input type="text" placeholder="Usuario"/>
              <input type="password" placeholder="Contraseña"/>
              <button>Entrar</button>
            </form>
          </div>
        </div>
      </main>



      <div className="register">
        <div className="container__register">
          <div className="container__date-register">
              <form action="" className="form__register">
                <h2>Regístrarse</h2>
                <input type="text" placeholder="Nombre completo"/>
                <input type="text" placeholder="Correo Electronico"/>
                <input type="text" placeholder="Centro de Costo"/>
                <input type="password" placeholder="Contraseña"/>
                <input type="password" placeholder="Ingrese contraseña nuevamente"/>
                <button>Regístrarse</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;
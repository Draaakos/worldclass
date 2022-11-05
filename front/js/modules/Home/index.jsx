import Login from './components/Login';

const Home = () => {

  return(
    <div>
      <Login />

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
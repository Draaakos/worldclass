import Login from './components/Login';

const Banner = () => (
  <div className="banner">
    <div className="banner__container">
      <div className="banner__title">World Class Mining Services</div>
      <div className="banner__title-paragraph">Manejo y control de vehículos de nuestra empresa para poseer un mayor control y brindarles un mejor servicio.</div>
    </div>
  </div>
);

const Info = () => (
  <>
    <div className="info__left">
      <div className="info__left__left">2022</div>
    </div>
    <div className="container__info">
      <div className="container__info__title"> Líderes en mitigación y colectores de polvo</div>
      <div className="container__info__text-two">Somos una empresa dedicada a prestar servicios a la industria minería en el control de material particulado en minería y otros procesos integrales</div>
    </div>
    <div className="info">
      <div className="info__rigth"> Controlemos Nuestra Empresa
      <div className="info__rigth__two">Permita que nuestra preocupación prematura se convierta en pensamiento y planificación</div>
      </div>
    </div>
  </>
); 


const Home = () => {
  return(
    <section className="page">
      <div className="navbar-login">
        <Login />
      </div>
      <div className="banner__wrapper">
        <div className="banner__wrapper-shadow">
          <Banner />
        </div>
      </div>
      <div className="main-info">
        <Info />
      </div>  
    </section>
  )
}

export default Home;
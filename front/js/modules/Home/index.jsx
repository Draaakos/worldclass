import React from 'react';
import Login from './components/Login';

const Banner = () => (
  <div className="banner">
    <div className="banner__line-one"></div>
    <div className="banner__container">
      <div className="banner__title">World Class Mining Services</div>
      <div className="banner__title-paragraph">Manejo y control de vehículos de nuestra empresa para poseer un mayor control y brindarles un mejor servicio.</div>
    </div>
    <div className="banner__line-two"></div>
  </div>
  
);

const Info = () => (
  <React.Fragment>
    <div className="main-info__container">
      <div className="main-info__container__body">
        <a href="https://worldclassms.cl/">
          <img src="./static/images/logo01.jpg" alt="logo" />
        </a>
      </div>
    </div>
    <div className="main-info__container">
      <div>
        <div className="main-info__container__title"> Líderes en mitigación y colectores de polvo</div>
        <div className="main-info__container__body-title">Somos una empresa dedicada a prestar servicios a la industria minería en el control de material particulado en minería y otros procesos integrales</div>
      </div>
    </div>
    <div className="main-info__container">
      <div className='main-info__absolute'>
        <div className="main-line">
        <div className="main-block-head">
          <span>Controlemos Nuestra Empresa</span>
        </div>
        <div className="main-block-body">Permita que nuestra preocupación prematura se convierta en pensamiento y planificación</div>
        </div>
        </div>
      </div>
  </React.Fragment>
); 


const Home = () => {
  return(
    <section className="page">
      <Login />
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
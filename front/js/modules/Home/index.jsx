import React from 'react';
import Login from './components/Login';

const Banner = () => (
  <div className="banner">
    <div className="banner__line-one"></div>
    <div className="banner__container">
      <div className="banner__title">World Class Mining Services</div>
      <div className="banner__title-paragraph">Información para Hsec</div>
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
        <div className="main-info__container__title"> Información para Hsec</div>
        <div className="main-info__container__body-title">Información para Hsec</div>
      </div>
    </div>
    <div className="main-info__container">
      <div className='main-info__absolute'>
        <div className="main-line">
        <div className="main-block-head">
          <span>Información para Hsec</span>
        </div>
        <div className="main-block-body">Información para Hsec</div>
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
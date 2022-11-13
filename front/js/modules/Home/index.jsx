import Login from './components/Login';

const Banner = () => (
  <div className="banner">
    <div className="banner__container">
      <div className="banner__title">Construyendo juntos</div>
      <div className="banner__title-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia optio aspernatur est eum adipisci nobis facere, deserunt inventore dolores neque sint mollitia cupiditate animi nam natus pariatur doloribus</div>
    </div>
  </div>
);


const Home = () => {
  return(
    <section className="page">
      <div className="banner__wrapper">
        <div className="banner__wrapper-shadow">
          <Banner />
        </div>
      </div>
      <div className="main-info">aca</div>
    </section>
  )
}

export default Home;
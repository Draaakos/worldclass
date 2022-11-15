import Login from './components/Login';

const Banner = () => (
  <div className="banner">
    <div className="banner__container">
      <div className="banner__title">Construyendo juntos</div>
      <div className="banner__title-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia optio aspernatur est eum adipisci nobis facere, deserunt inventore dolores neque sint mollitia cupiditate animi nam natus pariatur doloribus</div>
    </div>
  </div>
);

const Info = () => (
  <>
    <div className="info__left">
      <div className="info__left__left">450</div>
    </div>
    <div className="container__info">
      <div className="container__info__title"> Proyectos Completados
      <div className="container__info__text-two">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit, voluptates officiis sit vel itaque architecto temporibus consequuntur exercitationem modi assumenda aut pariatur rerum consequatur dolor laborum libero harum neque.</div>
      </div>
    </div>
    <div className="info">
      <div className="info__rigth"> CONTRUCCION MODELADO DE INFORMACIÓN
      <div className="info__rigth__two">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore iste, eligendi reprehenderit, voluptatibus nihil, temporibus architecto excepturi culpa neque animi doloribus esse sed omnis assumenda atque reiciendis dolores quae consectetur?</div>
      </div>
    </div>
  </>
); 


const Home = () => {
  return(
    <section className="page">
      <div className="navbar">
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
import css from './horizontalpersoncard.css';

const HorizontalPersonCard = ({ item }) => {
  const {
    firstname,
    lastname,
    email,
    address,
    birthdate,
    city,
    startContract,
    job,
    rut,
    nationality,
    phone,
    endContract
  } = item;

  return (
    <div className={css.horizontalPersonCard}>
      <div className={css.sectionWrapper}>
        <section>
          <div className={css.informationWrapperIcon}>
            <div><img src="/static/images/profile.svg"/></div>
            <div>{firstname} {lastname}</div>
          </div>
          <div className={css.informationWrapperIcon}>
            <div><img src="/static/images/location.svg"/></div>
            <div>{address}, {city}</div></div>
          <div className={css.informationWrapperIcon}>
            <div><img src="/static/images/info.svg"/></div>
            <div>{rut}, {nationality}</div>
          </div>
        </section>
        <section className={css.secondSection}>
          <div className={css.informationWrapper}>
            <div>Correo:</div>
            <div>{email}</div>
          </div>
          <div className={css.informationWrapper}>
            <div>Telefono:</div>
            <div>{phone}</div>
          </div>
        </section>
      </div>
      <div className={css.sectionWrapper}>
        <section>
          <div className={css.informationWrapper}>
            <div>Inicio de contrato:</div>
            <div>{startContract}</div>
          </div>
          <div className={css.informationWrapper}>
            <div>Fin de contrato: </div>
            <div>{endContract}</div>
          </div>
        </section>
        <section className={css.secondSection}>
          <div className={css.informationWrapper}>
            <div>Ocupacion:</div>
            <div>{job}</div>
          </div>
          <div className={css.informationWrapper}>
            <div>Nacimiento:</div>
            <div>{birthdate}</div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default HorizontalPersonCard;



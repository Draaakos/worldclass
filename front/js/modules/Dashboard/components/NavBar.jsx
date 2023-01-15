import React from "react";
import service from "../../../services/dashboard";

const Item = ({ url, label }) => <a className="navbar__item" href={url}>{label}</a>

const NavBar = ({ navbarOptions }) => {
  const onLogout = () => {
    service.logout()
    window.location.assign("/")
  }

  const onTitleClick = () => {
    window.location.assign("/dashboard");
  }

  return (
    <nav className="navbar">
      <img src={"../static/images/logo_black.png"} className="navbar__title" onClick={onTitleClick} alt="Worldclass logo" />
      <div className="navbar__wrapper-items">
        { navbarOptions.map((item, index) => <Item key={`nav-${index}`} url={item.url} label={item.label} />) }
        <div className="navbar__item" onClick={onLogout}>Cerrar Sesion</div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  navbarOptions: []
}

export default NavBar;

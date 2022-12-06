import React from "react";
import service from "../../../services/dashboard";

const Item = ({ url, label }) => <a className="navbar__item" href={url}>{label}</a>

const NavBar = ({ navbarOptions }) => {
  const onLogout = () => {
    service.logout()
    window.location.assign("/")
  }

  return (
    <nav className="navbar">
      <h2 className="navbar__title">Worldclass</h2>
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

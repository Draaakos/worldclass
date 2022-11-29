import React from "react";
import service from "../../../services/dashboard";

const NavBar = () => {
  const onLogout = () => {
    service.logout()
    window.location.assign("/")
  }

  return (
    <nav className="navbar">
      <h2 className="navbar__title">Worldclass</h2>
      <div className="navbar__wrapper-items">
        <a className="navbar__item" href="/dashboard">Inicio</a>
        <a className="navbar__item" href="/dashboard/user">Usuarios</a>
        <a className="navbar__item" href="/dashboard/costcenter">Centro de Costo</a>
        <div className="navbar__item" onClick={onLogout}>Logout</div>
      </div>
    </nav>
  );  
}

export default NavBar;
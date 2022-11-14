import React from "react";

const NavBar = ({ onActiveModal }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">World Class</h2>
      <div className="navbar__wrapper-items">
        <a className="navbar__item" href="/dashboard">Inicio</a>
        <a className="navbar__item" href="/dashboard/user">Usuarios</a>
        {/* <a className="navbar__item" href="/">Vehiculos</a> */}
        <a className="navbar__item" href="/dashboard/costcenter">Centro de Costo</a>
        {/* <div onClick={onActiveModal} className="navbar__item">Registrar Usuario</div>
        <div onClick={onActiveModal} className="navbar__item">Registrar vehiculo</div> */}
      </div>
    </nav>
  );  
}

export default NavBar;
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">World Class</h2>
      <div className="navbar__wrapper-items">
        <a className="navbar__item" href="/">Inicio</a>
        <a className="navbar__item" href="/">Usuario</a>
        <a className="navbar__item" href="/">Vehiculos</a>
        <a className="navbar__item" href="/">Centro de Costo</a>
      </div>
    </nav>
  );  
}

export default NavBar;
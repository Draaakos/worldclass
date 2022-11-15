import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">World Class</h2>
      <div className="navbar__wrapper-items">
        <a className="navbar__item" href="/dashboard">Inicio</a>
        <a className="navbar__item" href="/dashboard/user">Usuarios</a>
        <a className="navbar__item" href="/dashboard/costcenter">Centro de Costo</a>
      </div>
    </nav>
  );  
}

export default NavBar;
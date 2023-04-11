import React from "react";
import { useState } from "react";
import classNames from "classnames";

const NavBar = ({ navbarOptions }) => {
  const Item = ({ url, label, logo}) => {
    return (
      <a className="options__item" href={url}>
        <img src={`../static/images/${logo}`}/>
        <span className="options__text">{label}</span>
      </a>
    )
  }

  return (
    <aside className='sidebar'>
      <div className="head">
        <div className="head__company">
          <img src="../static/images/logo_black.png" />
        </div>
      </div>

      <div className="options">
        { navbarOptions.map((item, index) => <Item key={`nav-${index}`} url={item.url} label={item.label} logo={item.icon}/>) }
      </div>

        <div className="logout-wrapper">
          <Item label={'Cerrar sesion'} logo={'logout.svg'} url={'/'}/>
        </div>
    </aside>
  )
}


// const NavBar = ({ navbarOptions }) => {
//   const onLogout = () => {
//     service.logout()
//     window.location.assign("/")
//   }

//   const onTitleClick = () => {
//     window.location.assign("/dashboard");
//   }

//   return (
//     <nav className="navbar">
//       <img src={"../static/images/logo_black.png"} className="navbar__title" onClick={onTitleClick} alt="Worldclass logo" />
//       <div className="navbar__wrapper-items">
//         { navbarOptions.map((item, index) => <Item key={`nav-${index}`} url={item.url} label={item.label} />) }
//         <div className="navbar__item" onClick={onLogout}>Cerrar Sesion</div>
//       </div>
//     </nav>
//   );
// }

// NavBar.defaultProps = {
//   navbarOptions: []
// }

export default NavBar;

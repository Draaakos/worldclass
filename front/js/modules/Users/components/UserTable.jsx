import { useState } from 'react';

const UserTable = ({username, email, personType}) => {
  return (
    <>
      <div className="person">
        <div className="person__item">{username}</div>
        <div className="person__item">{email}</div>
        <div className="person__item">{personType}</div>
        <div className="options-wrapper">
          <div>borrar</div>
          <div className="person__item">Editar</div>
        </div>
      </div>
    </> 
  )
}

export default UserTable
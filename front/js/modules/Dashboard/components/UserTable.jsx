const UserTable = ({username, email}) => {
  return (
    <>
      <div className="person">
        <div className="person__item">{username}</div>
        <div className="person__item">{email}</div>
      </div>
    </> 
  )
}

export default UserTable
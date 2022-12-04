import RowBody from './RowBody';
import RowHead from './RowHead';

const UserTable = ({ headers, data, selectors, userType }) => {
  return (
    <div className='usertype-table'>
      <RowHead headers={headers} />
      <RowBody data={data} selectors={selectors} userType={userType} />
    </div>
  )
}

export default UserTable

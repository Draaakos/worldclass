import RowBody from './RowBody';
import RowHead from './RowHead';

const UserTable = ({ headers, data, selectors }) => {
  return (
    <div className='usertype-table'>
      <RowHead headers={headers} />
      <RowBody data={data} selectors={selectors} />
    </div>
  )
}

export default UserTable
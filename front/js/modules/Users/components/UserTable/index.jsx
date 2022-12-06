import RowBody from './RowBody';
import RowHead from './RowHead';

const UserTable = ({ headers, data, selectors, userType, onDeleteItem }) => {
  console.log(data)
  return (
    <div className='usertype-table'>
      <RowHead headers={headers} />
      <RowBody data={data} selectors={selectors} userType={userType} onDeleteItem={onDeleteItem} />
    </div>
  )
}

export default UserTable

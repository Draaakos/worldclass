import HorizontalPersonCard from '../HorizontalPersonCard';
import css from './table.css';

const CostCenterBlock = ({ children, name }) => (
  <div className={css.costCenterBlock}>
    <div>CENTRO DE COSTO: {name}</div>
    <div className={css.costCenterGrid}>{children}</div>
  </div>
);


const Table = ({ list }) => {
  const dataFrame = {};
  list.forEach(item => {
    if(!(item.costCenter in dataFrame)) {
      dataFrame[item.costCenter] = [];
    }

    dataFrame[item.costCenter].push(item);
  });

  const costCenterRowList = Object.entries(dataFrame).map(arr => {
    const name = arr[0];
    const value = arr[1];

    const rowList = value.map(element => <HorizontalPersonCard item={element} />);

    return (
      <CostCenterBlock name={name}>
        {rowList}
      </CostCenterBlock>
    )
  });

  return (
    <section className={css.table}>
      {costCenterRowList}
    </section>
  );
};

export default Table;

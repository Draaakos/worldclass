
const CostCenterTable = ({code, name}) => {
    return (
      <>
        <div className="costCenter">
          <div className="costCenter__item">{code}</div>
          <div className="costCenter__item">{name}</div>
        </div>
      </> 
    )
  }
  
export default CostCenterTable;
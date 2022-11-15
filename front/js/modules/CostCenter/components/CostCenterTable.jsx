
const CostCenterTable = ({code, name}) => {
    return (
      <>
        <div className="costcenter">
          <div className="costcenter__item">{code}</div>
          <div className="costcenter__item">{name}</div>
          <div className="options-wrapper">
            <div>Borrar</div>
            <div>Editar</div>
          </div>
        </div>
      </> 
    )
  }
  
export default CostCenterTable;
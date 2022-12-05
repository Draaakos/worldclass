
const Selector = ({ data, onChange, value, valueKey, isEditable }) => {
  const options = data
    .map((item, index) => {
      return (
        item.id == value
          ? <option key={`select-${index}`} value={item.id} selected>{item.name}</option>
          : <option key={`select-${index}`} value={item.id}>{item.name}</option>
      )
    });


  // TODO: REVISAR INCONSISTENCIA EN ITEM.ID CON ITEM.NAME, SIEMPRE DEBERIA VENIR UN TIPO DE VALOR EN "VALUE"
  // AHORA ESTA LLEGANDO EN ALGUNOS LUGARES UN ID Y EN OTROS NOMBRE
  return (
    isEditable
      ? (
        <select className="selector" onChange={evt=> onChange(valueKey, evt.target.value)}>
          { options }
        </select>
      ) : <div>{data.find(item => item.id == value || item.name == value).name}</div>
  )
}

Selector.defaultProps = {
  onChange: () => {}
};

export default Selector;

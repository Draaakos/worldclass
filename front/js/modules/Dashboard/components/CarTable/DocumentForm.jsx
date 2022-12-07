import { useState } from "react";
import DatePicker from "react-datepicker";

const DocumentForm = ({ data, onSubmit }) => {
	const [startDate, setStartDate] = useState(new Date());

  return (
		<form className="form-register" id={`form-${data.id}`} method="post" encType="multipart/form-data" >
			<div className="form-register__title">Subir documento</div>
			<label className="form-register__label">Nombre del archivo</label>
			<input className="form-register__input"/>
			<label className="form-register__label" type="date">Fecha de expiracion</label>
			<DatePicker className="form-register__input" selected={startDate} onChange={(date) => setStartDate(date)} />
			<input type="file" className="form-register__input"/>

			<button onSubmit={onSubmit} className="form-register__btn">Crear</button>
		</form>
  )
}

export default DocumentForm;
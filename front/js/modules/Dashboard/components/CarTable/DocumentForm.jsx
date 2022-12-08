import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import service from './../../../../services/formData.js';


function format(inputDate) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0');

  return `${year}-${month}-${date}`;
};


const DocumentForm = ({ data, onCloseModal }) => {
  const [startDate, setStartDate] = useState(new Date());

  const file = useRef(null);
  const name = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();

    const form = new FormData();
    form.append('name', name.current.value);
    form.append('upload', file.current.files[0]);
    form.append('expired_date', format(startDate))

    service.uploadDocument(form, data.id)
      .then(response => {
        console.log(response)
        onCloseModal()
        alert("Imagen subida correctamente")
      })
  };


  return (
		<form className="form-register" id={`form-${data.id}`} encType="multipart/form-data" >
			<div className="form-register__title">Subir documento</div>
			<label className="form-register__label">Nombre del archivo</label>
			<input ref={name} className="form-register__input"/>
			<label className="form-register__label" type="date">Fecha de expiracion</label>
			<DatePicker
        className="form-register__input"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
			<input ref={file} type="file" className="form-register__input"/>

			<button onClick={onSubmit} className="form-register__btn">Crear</button>
		</form>
  );
};

export default DocumentForm;

import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Selector from "ui/Selector";
import service from "./../../../../services/formData.js";


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


const DocumentForm = ({ data, onCloseModal, selectors }) => {
  const [ startDate, setStartDate ] = useState(new Date());
  const [ documentType, setDocumentType ] = useState(null);

  const file = useRef(null);

  const onChangeSelectorType = (_, value) => {
    setDocumentType(value);
  }

  const onSubmit = evt => {
    evt.preventDefault();

    if(documentType) {
      const form = new FormData();
      form.append('document_type', documentType);
      form.append('upload', file.current.files[0]);
      form.append('expired_date', format(startDate))

      service.uploadDocument(form, data.id)
        .then(response => {
          onCloseModal();
          alert("Archivo subido correctamente");
        })
    } else {
      alert('Debes seleccionar un tipo de archivo');
    }
  };

  return (
		<form className="form-register" id={`form-${data.id}`} encType="multipart/form-data" >
			<div className="form-register__title">Subir documento</div>
      <Selector data={selectors.documentType} valueKey="documentType" onChange={onChangeSelectorType} isEditable />

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

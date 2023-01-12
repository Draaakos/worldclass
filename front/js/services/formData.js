import { get, post,_post, put, onDelete } from './fetchUtils.js';

const service = {
  fetchAllCostCenter() {
    const url = '/api/v1/costcenter';

    return get(url).then(response => response.json());
  },
  registerUser(payload) {
    const url = '/api/v1/register';

    return post(url, payload)
      .then(response => response.json());
  },
  fetchAllPersonTypes() {
    const url = '/api/v1/person/type';

    return get(url).then(response => response.json());
  },
  registerCar(payload) {
    const url = '/api/v1/car';

    return post(url, payload)
      .then(response => response.json());
  },
  updateCar(payload, id) {
    const url = `/api/v1/car/${id}`;

    return put(url, payload)
      .then(response => response.json());
  },
  fetchAllCarTypes() {
    const url = '/api/v1/car/type';

    return get(url).then(response => response.json());
  },
  registerCostCenter(payload) {
    const url = '/api/v1/costcenter';

    return post(url, payload)
      .then(response => response.json());
  },
  deleteCar(id) {
    const url = `/api/v1/car/${id}`;

    return onDelete(url)
      .then(response => response.json());
  },
  updateCostCenter(payload, id) {
    const url = `/api/v1/costcenter/${id}`;

    return put(url, payload)
      .then(response => response.json());
  },
  deleteCostCenter(id) {
    const url = `/api/v1/costcenter/${id}`;

    return onDelete(url)
      .then(response => response.json());
  },
  updateUser(payload, id) {
    const url = `/api/v1/person/${id}`;

    return put(url, payload)
      .then(response => response.json());
  },
  deleteUser(id) {
    const url = `/api/v1/person/${id}`;

    return onDelete(url)
      .then(response => response.json());
  },
  uploadDocument(form, carId) {
    const url = `/api/v1/car/${carId}/document`;
    console.log(url)

    return _post(url, form)
      .then(response => response.json());
  },
  deleteDocument(carId, documentId) {
    const url = `/api/v1/car/${carId}/document/${documentId}`;
    console.log(url);
  
    return onDelete(url).then(response => response.json());
  },
}

export default service;

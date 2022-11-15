import { get, post, onDelete } from './fetchUtils.js';

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
    const url = '/api/v1/car/<int:id>';
    return onDelete(url, id)
      .then(response => response.json());
  }
}

export default service;
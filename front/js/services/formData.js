import { get, post } from './fetchUtils.js';

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
  }
}

export default service;
import { get } from './fetchUtils.js';

const service = {
  fetchAllCostCenter() {
    const url = '/api/v1/costcenter';
    return get(url).then(response => response.json());
  }
}

export default service;
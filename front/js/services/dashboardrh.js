import { get, post } from './fetchUtils.js';

const service = {
  initialData() {
    const url = '/api/v1/rh/dashboard';

    return get(url)
      .then(response => response.json());
  }
}

export default service;

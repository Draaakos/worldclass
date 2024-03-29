import { post } from './fetchUtils.js';

const service = {
  login(username, password) {
    const url = '/api/v1/login';
    const payload = { username, password };

    return post(url, payload)
      .then(response => response.json());
  }
}

export default service;
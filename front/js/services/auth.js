import { post } from './fetchUtils.js';

const service = {
  login(username, password) {
    const url = '/api/v1/login';
    const payload = { username, password };

    return post(url, payload)
      .then(response => response.json());
  },

  register(username, email, costCenter, password, passwordTwo) {
    const url = '/api/v1/register'
    const payload = {username, email, costCenter, password, passwordTwo}

    return post(url, payload)
      .then(response => response.json())
  }
}

export default service;
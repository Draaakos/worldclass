import NavBar from '../modules/Dashboard/components/NavBar.jsx';
import { post } from './fetchUtils.js';

const service = {
  login(username, password) {
    const url = '/api/v1/login';
    const payload = { username, password };

    return post(url, payload)
      .then(response => response.json());
  },

  UserForm(username, email, costCenter, password, passwordTwo) {
    const url = '/api/v1/UserForm'
    const payload = {username, email, costCenter, password, passwordTwo}

    return post(url, payload)
      .then(response => response.json())
  }
}

export default service;
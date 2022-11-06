import { get } from './fetchUtils.js';

const service = {
  fetchDashboardData() {
    const url = '/api/v1/dashboard';

    return get(url)
      .then(response => response.json());
  }
}

export default service;
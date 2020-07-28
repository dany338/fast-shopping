import { API_URL } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  newApiHeaders.append("Content-Type", "application/json");
  newApiHeaders.append("Accept", "application/json");
  newApiHeaders.append("Access-Control-Allow-Origin", "*");
  newApiHeaders.append("Connection", "Keep-Alive");
  newApiHeaders.append("Access-Control-Allow-Credentials", '*');
  // newApiHeaders.append("crossorigin", '*');
  return {
    method,
    headers: newApiHeaders,
    // crossorigin: '*',
    credentials: 'same-origin',
    mode: 'cors',
    ...body,
  };
};

export const apiProducts = {
  list: async () => {
    try {
      const response = await fetch(`${API_URL}${endpoints.products.list}/`, {mode:'cors'});
      if (response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error.toString();
    }
  },
  list2: async () => {
    try {
      // const response = await fetch(`${API_URL}${endpoints.products.list}`, fetchParams('GET'));
      return fetch(`${API_URL}${endpoints.products.list}`).then((response) => {
        return response.json();
      }).then((result) => {
        return result;
      });
    } catch (error) {
      return error.toString();
    }
  }
};

export default apiProducts;

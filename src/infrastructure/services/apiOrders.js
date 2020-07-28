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
  // newApiHeaders.append("Content-Type", "application/json");
  // newApiHeaders.append("Accept", "*/*");
  // newApiHeaders.append("Access-Control-Allow-Origin", "*");
  console.log(data);
  return {
    method,
    headers: newApiHeaders,
    // credentials: 'same-origin',
    // mode: 'cors',
    body: JSON.stringify(data),
  };
};

export const apiOrders = {
  create: async (info) => {
    try {
      const response = await fetch(`${API_URL}${endpoints.orders.create}/`, fetchParams('POST', { ...info }));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
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
      return error;
    }
  },
  create2: async (info) => {
    var data = new FormData();
    data.append( "json", JSON.stringify( info ) );
    const newApiHeaders = new Headers();
    // newApiHeaders.append("Access-Control-Allow-Origin", "*");
    // newApiHeaders.append("Content-Type", "application/json");
    const rawResponse = await fetch(`${API_URL}${endpoints.orders.create}`, {
      method: 'POST',
      headers: newApiHeaders,
      // mode: 'cors',
      // credentials: 'same-origin',
      body: JSON.stringify(info)
    });
    const content = await rawResponse.json();

    console.log(content);
  }
};

export default apiOrders;

import axios from 'axios';

const url = `http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

async function get(apiUrl: string) {
  const result = await axios.get(`${url}${apiUrl}`, {
    withCredentials: true,
  });

  if (!result) {
    throw new Error('ERROR');
  }

  return result;
}

async function post<T>(apiUrl: string, data: T) {
  const result = await axios.post(`${url}${apiUrl}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return result;
}

export { get, post };

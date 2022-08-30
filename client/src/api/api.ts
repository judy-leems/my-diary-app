import axios from 'axios';

const url = `http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

const get = async (
  endpoint: String,
  params: String | null = ''
): Promise<any> => {
  const apiUrl = `${url}${endpoint}/${params}`;
  const res = await axios.get(apiUrl);
  return res.data;
};

export { get };

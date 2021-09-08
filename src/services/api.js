import axios from 'axios';

axios.create({
  timeout: 200000
});

// TODO
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const setHeaders = (headers) => {
  const defaultHeader = { 'Content-Type': 'application/json' };
  if (headers) return Object.assign(defaultHeader, headers);
  return defaultHeader;
};

export const get = (url, headers) => {
  return axios.get(`${url}`, setHeaders(headers));
};

export const post = (url, data, headers) => {
  return axios.post(`${url}`, data, setHeaders(headers));
};

export const patch = (url, data, headers) => {
  return axios.patch(`${url}`, data, setHeaders(headers));
};

export const put = (url, data, headers) => {
  return axios.put(`${url}`, data, setHeaders(headers));
};

export const remove = (url, data, headers) => {
  return axios.delete(`${url}`, setHeaders(headers));
};

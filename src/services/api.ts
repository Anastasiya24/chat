import axios from 'axios';

axios.create({
  timeout: 200000,
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const defaultHeader: Object = { 'Content-Type': 'application/json' };

export const get = (url: string) => {
  return axios.get(`${url}`, defaultHeader);
};

export const post = (url: string, data: any) => {
  return axios.post(`${url}`, data, defaultHeader);
};

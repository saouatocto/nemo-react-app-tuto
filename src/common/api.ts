import axios from 'axios';
import { REACT_APP_API_URL } from './config';

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.response.use((response) => {
  if (response.data) return response.data;
  return response;
});

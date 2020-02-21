import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    console.log(`interceptors`);
    return response;
  },
  error => {
    // @TODO: implementar toast de error
    console.log(`interceptor, ${error}`);
    return Promise.reject(error);
  }
);

export default api;

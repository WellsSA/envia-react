import axios from 'axios';
// import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.response.use(
  response => {
    console.log(`interceptors`);
    return response;
  },
  error => {
    // toast.error('Houve um erro inesperado. Verifique sua conexão');
    console.log(`interceptor, ${error}`);
    return Promise.reject(error);
  }
);

export default api;

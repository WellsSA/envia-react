import axios from 'axios';

import { notifyError } from '../../utils/notifyHelper';
import { getErrorMessage } from './errors.data';

const baseURL = 'http://localhost:4000';
const api = axios.create({ baseURL });

api.interceptors.response.use(
  response => response,
  error => {
    notifyError(getErrorMessage(error.response.data.error.message));
    console.log(`interceptor, ${error}`);
    return error.response;
  }
);

export default api;

export { baseURL };

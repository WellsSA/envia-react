import axios from 'axios';

import { notifyError } from '../../utils/notifyHelper';
import { getErrorMessage, DEFAULT_ERROR } from './errors.data';

const baseURL = 'http://localhost:4000';
const api = axios.create({ baseURL });

api.interceptors.response.use(
  response => response,
  error => {
    // console.log(`interceptor, ${error}`);
    if (error.response && error.response.data) {
      notifyError(getErrorMessage(error.response.data.error.message));
      return error.response;
    }
    notifyError(DEFAULT_ERROR);
    return {
      ...error,
      data: { error: { message: 'unknown error' } },
    };
  }
);

export default api;

export { baseURL };

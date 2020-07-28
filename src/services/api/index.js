import axios from 'axios';

import { store } from '~/store';
import { showLoading, disposeLoading } from '~/store/modules/loading/actions';
import { signOut } from '~/store/modules/auth/actions';
import { notifyError } from '~/utils/notifyHelper';
import { getErrorMessage, DEFAULT_ERROR } from './errors.data';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({ baseURL });

api.interceptors.request.use(
  config => {
    store.dispatch(showLoading());
    return config;
  },
  error => error
);

api.interceptors.response.use(
  response => {
    store.dispatch(disposeLoading());
    return response;
  },
  error => {
    store.dispatch(disposeLoading());
    if (error.response && error.response.data) {
      const { message } = error.response.data.error;

      notifyError(getErrorMessage(message));

      if (message === 'invalid token') store.dispatch(signOut());

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

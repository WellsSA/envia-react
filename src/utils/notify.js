import { toast } from 'react-toastify';
import {
  notifySuccess as successAction,
  notifyError as errorAction,
} from '../store/modules/notify/actions';

const notifySuccess = (message, dispatch = null) => {
  if (dispatch) {
    dispatch(successAction(message));
  }
  toast.success(message);
};

const notifyError = (message, dispatch = null) => {
  if (dispatch) {
    dispatch(errorAction(message));
  }
  toast.error(message);
};

export { notifySuccess, notifyError };

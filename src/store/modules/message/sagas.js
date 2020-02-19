import { takeLatest, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import history from '../../../services/history';
// import api from '~/services/api';
// import { helloWorld } from './actions';

export function handleHelloWorld({ payload }) {
  const { data } = payload;
  alert(data);
  history.push('/');
}

export default all([takeLatest('@message/HELLO_WORLD', handleHelloWorld)]);

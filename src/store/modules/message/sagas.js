import { takeLatest, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import history from '../../../services/history';
// import api from '~/services/api';
import { nextStep } from './actions';

export function handleHelloWorld({ payload }) {
  const { data } = payload;
  alert(data);
  history.push('/');
}

export function* handleSetupMessage({ payload }) {
  try {
    const { titulo, saudacao, mensagem } = payload;

    if (!titulo || !saudacao || !mensagem) {
      throw Error('Dados da mensagem inválidos.');
    }

    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    console.log(err.message);
  }
}

export default all([
  takeLatest('@message/HELLO_WORLD', handleHelloWorld),
  takeLatest('@message/SETUP_MESSAGE', handleSetupMessage),
]);

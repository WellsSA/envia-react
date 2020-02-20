import { takeLatest, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import history from '../../../services/history';
// import api from '~/services/api';
import { nextStep, setupFiltersSuccess } from './actions';

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

export function* handleSetupSendTo({ payload: { sendTo } }) {
  try {
    const { alunos, responsaveis } = sendTo;
    if (!alunos && !responsaveis) {
      throw Error('Selecione ao menos uma opção.');
    }

    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    console.log(err.message);
  }
}

export function* handleSetupFilters({ payload: { criteria, data } }) {
  try {
    if (!criteria || !data || data.length === 0) {
      throw Error('Selecione ao menos uma opção.');
    }
    yield put(setupFiltersSuccess({ criteria, data }));
    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    console.log(err.message);
  }
}

export default all([
  takeLatest('@message/HELLO_WORLD', handleHelloWorld),
  takeLatest('@message/SETUP_MESSAGE', handleSetupMessage),
  takeLatest('@message/SETUP_SEND_TO', handleSetupSendTo),
  takeLatest('@message/SETUP_FILTERS', handleSetupFilters),
]);

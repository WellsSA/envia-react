import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import { notifySuccess, notifyError } from '~/utils/notifyHelper';

export function* signIn({ payload: { email, password } }) {
  try {
    const { data, status } = yield call(api.post, 'sessions', {
      email,
      password,
    });

    if (status !== 200) throw Error('Unauthorized');

    const { token, user } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
    notifySuccess('Ola! Bem vindo ao Envia!');
  } catch (err) {
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const { status } = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    if (status !== 200) {
      yield put(signFailure());
      return;
    }

    history.push('/');
    notifySuccess('Conta criada com sucesso!');
  } catch (err) {
    notifyError('Falha no cadastro, verifique seus dados.');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

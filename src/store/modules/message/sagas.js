import { takeLatest, put, all, select } from 'redux-saga/effects';
import { notifyError } from '../../../utils/notifyHelper';
import {
  nextStep,
  setupFiltersSuccess,
  setupMessage,
  prevStep,
} from './actions';

import { CRITERION } from './data';
import { handleNextStep, handleSetupStep } from './sagas.navigation';

export function* handleSetupMessage({ payload: { title, greeting, content } }) {
  try {
    if (!title || !greeting || !content) {
      throw Error('Dados da mensagem inválidos.');
    }

    yield put(setupMessage({ title, greeting, content }));
    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function handleSetupCriteria({ payload: { criteria } }) {
  try {
    if (!criteria) {
      throw Error('Selecione ao menos uma opção.');
    }
  } catch (err) {
    notifyError(err.message);
  }
}

export function* handleSetupFilters({ payload: { filters } }) {
  try {
    const criteria = yield select(state => state.message.criteria);

    switch (criteria) {
      case CRITERION.TEACHERS.value:
        if (!filters || filters.length === 0) {
          throw Error('Selecione ao menos uma opção.');
        }
        break;
      default:
        break;
    }
    yield put(setupFiltersSuccess({ filters }));
    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function* handleSetupAlunos({ payload: { alunos } }) {
  try {
    if (!alunos || alunos.length === 0) {
      throw Error('Selecione ao menos um aluno.');
    }
    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function* handleSetupPlatforms({ payload: { platforms } }) {
  try {
    if (!platforms || platforms.length === 0) {
      throw Error('Selecione ao menos uma plataforma.');
    }

    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function* handleClear() {
  try {
    yield put(prevStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export default all([
  takeLatest('@message/CHANGE_MESSAGE', handleSetupMessage),
  // takeLatest('@message/SETUP_SEND_TO', handleSetupSendTo),
  takeLatest('@message/SETUP_CRITERIA', handleSetupCriteria),
  takeLatest('@message/SETUP_FILTERS', handleSetupFilters),
  takeLatest('@message/SETUP_ALUNOS', handleSetupAlunos),
  takeLatest('@message/SETUP_PLATFORMS', handleSetupPlatforms),
  takeLatest('@message/NEXT_STEP', handleNextStep),
  takeLatest('@message/SET_STEP', handleSetupStep),
  takeLatest('@message/CLEAR', handleClear),
]);

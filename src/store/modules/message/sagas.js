import { takeLatest, put, all, select } from 'redux-saga/effects';
import { notifySuccess, notifyError } from '../../../utils/notifyHelper';
import {
  nextStep,
  setupFiltersSuccess,
  setupMessage,
  setStep,
} from './actions';

import { CRITERION, STEPS } from './data';

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

// export function* handleSetupSendTo({ payload: { sendTo } }) {
//   try {
//     const { alunos, responsaveis } = sendTo;
//     if (!alunos && !responsaveis) {
//       throw Error('Selecione ao menos uma opção.');
//     }

//     yield put(nextStep());
//   } catch (err) {
//     console.tron.error(err);
//     notifyError(err.message);
//   }
// }

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

export function hasNavigationInconsistency(messageState) {
  if (!messageState.message.content) {
    return {
      error: 'você ainda não selecionou a mensagem',
      stepToGo: STEPS.MESSAGE,
    };
  }
  // TODO: STEP.CRITERIA
  // if (!messageState.alunos.length) {
  //   return {
  //     error: 'você ainda não selecionou os alunos',
  //     stepToGo: STEPS.STUDENTS,
  //   };
  // }

  return false;
}

export function* handleSetupStep({ payload: { verify } }) {
  if (!verify) return;
  const messageState = yield select(state => state.message);
  const inconsistency = hasNavigationInconsistency(messageState);

  if (!inconsistency) return;

  notifyError(inconsistency.error);
  yield put(setStep({ step: inconsistency.stepToGo, verify: false }));
}

export function* handleNextStep() {
  try {
    /* Nota: O passo 2 ficará pra depois do MVP
      case 2:
        return notifySuccess(
          'Muito bom! Agora é só escolher enviar para aluno ou responsável!'
        );
      */
    const { curStep, ...messageState } = yield select(state => state.message);

    if (hasNavigationInconsistency(messageState)) return;
    switch (curStep) {
      case STEPS.CRITERIA:
        return notifySuccess('Muito bom! Agora é só selecionar os filtros!');
      case STEPS.STUDENTS:
        return notifySuccess('Quase lá! Selecione os alunos!');
      case STEPS.PLATFORMS:
        return notifySuccess('Selecione sua forma de envio!');
      case STEPS.CONFIRM:
        return notifySuccess('Agora é só confirmar as informações!');
      default:
        return;
    }
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

export default all([
  takeLatest('@message/CHANGE_MESSAGE', handleSetupMessage),
  // takeLatest('@message/SETUP_SEND_TO', handleSetupSendTo),
  takeLatest('@message/SETUP_CRITERIA', handleSetupCriteria),
  takeLatest('@message/SETUP_FILTERS', handleSetupFilters),
  takeLatest('@message/SETUP_ALUNOS', handleSetupAlunos),
  takeLatest('@message/SETUP_PLATFORMS', handleSetupPlatforms),
  takeLatest('@message/NEXT_STEP', handleNextStep),
  takeLatest('@message/SET_STEP', handleSetupStep),
]);

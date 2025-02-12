import { put, select } from 'redux-saga/effects';
import { notifySuccess, notifyError } from '../../../utils/notify';
import { setStep } from './actions';

import { CRITERION, STEPS, BIRTH_STEPS } from './data';

export function hasNavigationInconsistency(state) {
  // ON CRITERIA STEP
  if (!state.message.content) {
    return {
      error: 'você ainda não selecionou a mensagem',
      stepToGo: STEPS.MESSAGE,
    };
  }
  // ON STUDENTS STEP
  if (
    state.curStep >= STEPS.STUDENTS &&
    (!state.criteria ||
      (state.criteria !== CRITERION.ALL.value && !state.filters.length))
  ) {
    return {
      error: 'você ainda não selecionou um critério',
      stepToGo: STEPS.CRITERIA,
    };
  }
  // ON PLATFORMS STEP
  if (
    state.curStep >= STEPS.PLATFORMS &&
    state.criteria !== CRITERION.ALL.value &&
    !state.alunos.length
  ) {
    return {
      error: 'você ainda não selecionou os alunos',
      stepToGo: STEPS.STUDENTS,
    };
  }
  // ON CONFIRM STEP
  if (state.curStep >= STEPS.CONFIRM && !state.platforms.length) {
    return {
      error: 'você ainda não selecionou nenhuma plataforma',
      stepToGo: STEPS.PLATFORMS,
    };
  }

  return false;
}

export function hasAnivNavigationInconsistency(state) {
  // ON MESSAGE STEP
  if (
    state.curStep > BIRTH_STEPS.STUDENTS &&
    (!state.alunos || state.alunos.length === 0)
  ) {
    return {
      error: 'confirme para selecionar os alunos',
      stepToGo: BIRTH_STEPS.STUDENTS,
    };
  }
  // ON PLATFORMS STEP
  if (state.curStep > BIRTH_STEPS.MESSAGE && !state.message.content) {
    return {
      error: 'você ainda não selecionou a mensagem',
      stepToGo: BIRTH_STEPS.MESSAGE,
    };
  }

  return false;
}

export function* handleSetupStep({ payload: { verify } }) {
  if (!verify) return;
  const messageState = yield select(state => state.message);

  const inconsistencyValidator = messageState.aniversariantes
    ? hasAnivNavigationInconsistency
    : hasNavigationInconsistency;

  const inconsistency = inconsistencyValidator(messageState);

  if (!inconsistency) return;

  notifyError(inconsistency.error);
  yield put(setStep({ step: inconsistency.stepToGo, verify: false }));
}

export function* handleNextStep() {
  try {
    const { curStep, aniversariantes, ...messageState } = yield select(
      state => state.message
    );

    const inconsistencyValidator = aniversariantes
      ? hasAnivNavigationInconsistency
      : hasNavigationInconsistency;

    if (inconsistencyValidator(messageState)) return;

    if (!aniversariantes) {
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
    } else {
      switch (curStep) {
        case BIRTH_STEPS.MESSAGE:
          return notifySuccess('Muito bom! Escreva sua mensagem');
        case BIRTH_STEPS.PLATFORMS:
          return notifySuccess('Quase lá! Selecione as formas de envio');
        case BIRTH_STEPS.CONFIRM:
          return notifySuccess('Agora é só confirmar as informações!');
        default:
          return;
      }
    }
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

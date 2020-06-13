import { takeLatest, put, all, select } from 'redux-saga/effects';
import { notifySuccess, notifyError } from '../../../utils/notifyHelper';
import {
  nextStep,
  setupFiltersSuccess,
  prevStep,
  setupMessage,
} from './actions';

import { CRITERION } from './data';

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
      case CRITERION.professores.value:
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

export function* handleNextStep() {
  try {
    const step = yield select(state => state.message.curStep);
    /**
      1 => escrever mensagem
      2 => selecionar aluno/responsavel => REMOVIDO
      3 => selecionar filtros
      4 => selecionar alunos
      5 => selecionar forma de envio
      6 => confirmar
     */
    switch (step) {
      /* Nota: O passo 2 ficará pra depois do MVP
      case 2:
        return notifySuccess(
          'Muito bom! Agora é só escolher enviar para aluno ou responsável!'
        );
        return yield put(nextStep());
      */
      case 2:
        return notifySuccess('Muito bom! Agora é só selecionar os filtros!');
      case 3:
        return notifySuccess('Quase lá! Selecione os alunos!');
      case 4:
        return notifySuccess('Selecione sua forma de envio!');
      case 5:
        return notifySuccess('Agora é só confirmar as informações!');
      default:
        return;
    }
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function* handlePrevStep() {
  try {
    const step = yield select(state => state.message.curStep);
    if (step === 2) {
      yield put(prevStep());
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
  takeLatest('@message/NEXT_STEP', handleNextStep),
  takeLatest('@message/SET_STEP', handleNextStep),
  takeLatest('@message/PREV_STEP', handlePrevStep),
  takeLatest('@message/SETUP_ALUNOS', handleSetupAlunos),
  takeLatest('@message/SETUP_PLATFORMS', handleSetupPlatforms),
]);

import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { notifySuccess, notifyError } from '../../../utils/notifyHelper';
import api from '../../../services/api';
import {
  nextStep,
  setupFiltersSuccess,
  setupFilteredAlunos,
  prevStep,
  setupMessage,
} from './actions';

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
    if (criteria !== 0 && !criteria) {
      throw Error('Selecione ao menos uma opção.');
    }
  } catch (err) {
    notifyError(err.message);
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
    notifyError(err.message);
  }
}

export function* handleSetupFiltersSuccess({
  payload: { criteria, data: criteriaData },
}) {
  try {
    console.log(`Trying to search for ${criteria} ${criteriaData}`);
    const { data, status } = yield call(api.get, 'alunos');

    console.log({ data });
    if (status !== 200) throw Error('Houve um erro na conexão');
    if (!data || data.length === 0)
      throw Error('Não foram encontrados alunos para o critério selecionado');
    yield put(setupFilteredAlunos({ data }));
    console.log('puta', { data });
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

export function* handleSetupAlunos({ payload: { data } }) {
  try {
    if (!data || data.length === 0) {
      throw Error('Selecione ao menos um aluno.');
    }
    yield put(nextStep());
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export function* handleSetupPlatform() {
  try {
    const platforms = yield select(state => state.message.platforms);
    const platformCount = Object.keys(platforms).reduce(
      (acc, cur) => acc + +platforms[cur],
      0
    );

    if (platformCount === 0) {
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
  takeLatest('@message/SETUP_FILTERS_SUCCESS', handleSetupFiltersSuccess),
  takeLatest('@message/NEXT_STEP', handleNextStep),
  takeLatest('@message/SET_STEP', handleNextStep),
  takeLatest('@message/PREV_STEP', handlePrevStep),
  takeLatest('@message/SETUP_ALUNOS', handleSetupAlunos),
  takeLatest('@message/SETUP_PLATFORM', handleSetupPlatform),
]);

import produce from 'immer';

const INITIAL_STATE = {
  curStep: 1,
  keepEase: false,
  message: {
    title: '',
    greeting: '',
    content: '',
  },
  sendTo: {
    alunos: true,
    responsaveis: false,
  },
  criteria: '',
  filters: [],
  alunos: [],
  platforms: [],
  aniversariantes: false,
};

export default function message(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/NEXT_STEP': {
        draft.curStep = state.curStep + 1;
        break;
      }
      case '@message/PREV_STEP': {
        draft.curStep = state.curStep - 1;
        break;
      }
      case '@message/SET_STEP': {
        draft.curStep = action.payload.step;
        break;
      }
      case '@message/SETUP_MESSAGE': {
        draft.message = action.payload;
        break;
      }
      case '@message/SETUP_SEND_TO': {
        draft.sendTo = action.payload.sendTo;
        break;
      }
      case '@message/SETUP_CRITERIA': {
        draft.criteria = action.payload.criteria;
        draft.keepEase = false;
        break;
      }
      case '@message/SETUP_FILTERS_SUCCESS': {
        draft.filters = action.payload.filters;
        draft.keepEase = true;
        break;
      }
      case '@message/SETUP_ALUNOS': {
        draft.alunos = action.payload.alunos;
        break;
      }
      case '@message/SETUP_PLATFORMS': {
        draft.platforms = action.payload.platforms;
        break;
      }
      case '@message/CLEAR': {
        Object.keys(action.payload).forEach(key => {
          draft[key] = action.payload[key];
        });
        break;
      }
      case '@message/SETUP_ANIVERSARIANTES': {
        draft.aniversariantes = action.payload.open;
        draft.curStep = INITIAL_STATE.curStep;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.curStep = INITIAL_STATE.curStep;
        draft.message = INITIAL_STATE.message;
        draft.sendTo = INITIAL_STATE.sendTo;
        draft.criteria = INITIAL_STATE.criteria;
        draft.filters = INITIAL_STATE.filters;
        draft.filteredAlunos = INITIAL_STATE.filteredAlunos;
        draft.alunos = INITIAL_STATE.alunos;
        draft.platforms = INITIAL_STATE.platforms;
        break;
      }
      default:
        return state;
    }
  });
}

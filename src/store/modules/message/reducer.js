import produce from 'immer';

const INITIAL_STATE = {
  curStep: 5,
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
  filteredAlunos: [],
  alunos: [],
  platforms: {
    email: false,
    sms: false,
    whatsapp: false,
  },
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
      case '@message/SETUP_FILTERED_ALUNOS': {
        const { data } = action.payload;
        draft.filteredAlunos = data;
        break;
      }
      case '@message/SETUP_ALUNOS': {
        const { data } = action.payload;
        draft.alunos = data;
        break;
      }
      case '@message/SWITCH_PLATFORM': {
        const { platform } = action.payload;
        draft.platforms[platform] = !state.platforms[platform];
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

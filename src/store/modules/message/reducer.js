import produce from 'immer';

const INITIAL_STATE = {
  curStep: 5,
  message: {
    titulo: '',
    saudacao: '',
    mensagem: '',
  },
  sendTo: {
    alunos: true,
    responsaveis: false,
  },
  filter: {
    criteria: '',
    data: [],
  },
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
      case '@message/SETUP_MESSAGE': {
        draft.message = action.payload;
        break;
      }
      case '@message/SETUP_SEND_TO': {
        draft.sendTo = action.payload.sendTo;
        break;
      }
      case '@message/SETUP_FILTERS_SUCCESS': {
        const { criteria, data } = action.payload;
        draft.filter = {
          criteria,
          data,
        };
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
      default:
        return state;
    }
  });
}

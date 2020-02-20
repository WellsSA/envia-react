import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  curStep: 3,
  sendTo: {
    alunos: true,
    responsaveis: false,
  },
  filter: {
    criteria: '',
    data: [],
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

      default:
        return state;
    }
  });
}

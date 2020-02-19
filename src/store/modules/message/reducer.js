import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  curStep: 3,
  sendTo: {
    alunos: true,
    responsaveis: false,
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
      default:
        return state;
    }
  });
}

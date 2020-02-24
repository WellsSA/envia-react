import produce from 'immer';

export const NOTIFY_STATE = {
  SUCCESS: 'SUCCESS',
  NEUTRAL: 'NEUTRAL',
  ERROR: 'ERROR',
};

const INITIAL_STATE = {
  type: NOTIFY_STATE.NEUTRAL,
  message: 'just a test',
};

export default function notify(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notify/NOTIFY_SUCCESS': {
        draft.type = NOTIFY_STATE.SUCCESS;
        draft.message = action.payload.message;
        break;
      }
      case '@notify/NOTIFY_ERROR': {
        draft.type = NOTIFY_STATE.ERROR;
        draft.message = action.payload.message;
        break;
      }
      default:
        return state;
    }
  });
}

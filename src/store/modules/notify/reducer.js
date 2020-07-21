import produce from 'immer';

import { NOTIFY_STATE } from './data';

const INITIAL_STATE = {
  type: NOTIFY_STATE.CLOSED,
  message: '',
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
      case '@notify/NOTIFY_DISPOSE': {
        draft.type = INITIAL_STATE.type;
        draft.message = INITIAL_STATE.message;
        break;
      }
      default:
        return state;
    }
  });
}

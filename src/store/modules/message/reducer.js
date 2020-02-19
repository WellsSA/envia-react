import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/HELLO_WORLD': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}

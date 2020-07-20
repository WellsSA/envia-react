import produce from 'immer';

const INITIAL_STATE = {
  visible: false,
};

export default function loading(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@loading/SHOW':
        draft.visible = true;
        break;
      case '@loading/DISPOSE':
        draft.visible = false;
        break;
      default:
    }
  });
}

// import React from 'react';
import produce from 'immer';

const INITIAL_STATE = {
  visible: false,
  component: null,
};

export default function overlay(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@overlay/SET_COMPONENT': {
        draft.visible = true;
        draft.component = action.payload.component;
        break;
      }

      default:
        return state;
    }
  });
}

import React from 'react';
import produce from 'immer';

const INITIAL_STATE = {
  component: <></>,
};

export default function overlay(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/SET_COMPONENT': {
        draft.component = action.payload.component;
        break;
      }

      default:
        return state;
    }
  });
}

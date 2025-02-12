import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  licence: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { name, email, firstAccess, licence } = action.payload.user;
        draft.profile = { name, email, firstAccess };
        draft.licence = licence;
        break;
      }
      case '@auth/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@user/UPDATE_FIRST_ACCESS': {
        draft.profile.firstAccess = action.payload.to;
        break;
      }
      default:
    }
  });
}

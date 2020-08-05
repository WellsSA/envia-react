export function updateProfileRequest({ user }) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { user },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function addCredits({ kind, quantity }) {
  return {
    type: '@user/ADD_CREDITS_REQUEST',
    payload: { kind, quantity },
  };
}
export function updateFirstAccess({ to }) {
  return {
    type: '@user/UPDATE_FIRST_ACCESS',
    payload: { to },
  };
}

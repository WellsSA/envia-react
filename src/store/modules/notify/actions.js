export function notifySuccess(message) {
  return {
    type: '@notify/NOTIFY_SUCCESS',
    payload: { message },
  };
}

export function notifyError(message) {
  return {
    type: '@notify/NOTIFY_ERROR',
    payload: { message },
  };
}

export function disposeNotify() {
  return {
    type: '@notify/NOTIFY_DISPOSE',
  };
}

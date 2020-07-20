export function showLoading() {
  return {
    type: '@loading/SHOW',
  };
}

export function disposeLoading() {
  return {
    type: '@loading/DISPOSE',
  };
}

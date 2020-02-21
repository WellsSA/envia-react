export function setComponent({ component }) {
  return {
    type: '@overlay/SET_COMPONENT',
    payload: { component },
  };
}

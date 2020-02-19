export function helloWorld(data) {
  return {
    type: '@message/HELLO_WORLD',
    payload: { data },
  };
}

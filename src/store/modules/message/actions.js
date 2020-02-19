export function setupMessage({ titulo, saudacao, mensagem }) {
  return {
    type: '@message/SETUP_MESSAGE',
    payload: { titulo, saudacao, mensagem },
  };
}

export function nextStep() {
  return {
    type: '@message/NEXT_STEP',
  };
}

export function prevStep() {
  return {
    type: '@message/PREV_STEP',
  };
}

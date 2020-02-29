export function setupMessage({ titulo, saudacao, mensagem }) {
  return {
    type: '@message/SETUP_MESSAGE',
    payload: { titulo, saudacao, mensagem },
  };
}

export function setupSendTo(sendTo) {
  return {
    type: '@message/SETUP_SEND_TO',
    payload: { sendTo },
  };
}

export function setupFilters({ criteria, data }) {
  return {
    type: '@message/SETUP_FILTERS',
    payload: { criteria, data },
  };
}

export function setupFiltersSuccess({ criteria, data }) {
  return {
    type: '@message/SETUP_FILTERS_SUCCESS',
    payload: { criteria, data },
  };
}

export function setupFilteredAlunos({ data }) {
  return {
    type: '@message/SETUP_FILTERED_ALUNOS',
    payload: { data },
  };
}

export function setupAlunos({ data }) {
  return {
    type: '@message/SETUP_ALUNOS',
    payload: { data },
  };
}

export function setupPlatform({ platform }) {
  return {
    type: '@message/SETUP_PLATFORM',
    payload: { platform },
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

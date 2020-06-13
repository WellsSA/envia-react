export function changeMessage({ title, greeting, content }) {
  return {
    type: '@message/CHANGE_MESSAGE',
    payload: { title, greeting, content },
  };
}

export function setupMessage({ title, greeting, content }) {
  return {
    type: '@message/SETUP_MESSAGE',
    payload: { title, greeting, content },
  };
}

export function setupSendTo(sendTo) {
  return {
    type: '@message/SETUP_SEND_TO',
    payload: { sendTo },
  };
}

export function setupCriteria({ criteria }) {
  return {
    type: '@message/SETUP_CRITERIA',
    payload: { criteria },
  };
}

export function setupFilters({ filters }) {
  return {
    type: '@message/SETUP_FILTERS',
    payload: { filters },
  };
}

export function setupFiltersSuccess({ filters }) {
  return {
    type: '@message/SETUP_FILTERS_SUCCESS',
    payload: { filters },
  };
}

export function setupAlunos({ data }) {
  return {
    type: '@message/SETUP_ALUNOS',
    payload: { data },
  };
}

export function setupPlatforms({ platforms }) {
  return {
    type: '@message/SETUP_PLATFORMS',
    payload: { platforms },
  };
}

export function setStep({ step }) {
  return {
    type: '@message/SET_STEP',
    payload: { step },
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalHelper, ProgressBar, MessageStep } from '~/components';
import { Title, List } from '~/components/_common';
import { Container } from './styles';
// import {
//   MessageSetup,
//   PlatformsSetup,
//   ConfirmEnvio,
// } from '~/pages/EnviarMensagens/Steps';

import { setStep, setAniversariantes } from '~/store/modules/message/actions';
// import { CRITERION } from '~/store/modules/message/data';

const STEPS = {
  MESSAGE: 1,
  PLATFORMS: 2,
  CONFIRM: 3,
};

const AniversariantesModal = () => {
  const dispatch = useDispatch();

  const alunos = [
    { label: 'Wellington', value: '19 anos' },
    { label: 'Kauan', value: '13 anos' },
  ];

  const { curStep: step, aniversariantes } = useSelector(
    state => state.message
  );
  const maxSteps = Object.keys(STEPS).length;
  // const { message } = useSelector(state => state.message);
  // function _handleSubmit(data) {
  //   // handleSubmit(data);
  //   console.log({ data });
  //   document.getElementById(formId).reset();
  // }

  return (
    <ModalHelper
      title="ANIVERSARIANTES DO DIA"
      visible={aniversariantes}
      onSetVisible={data => dispatch(setAniversariantes({ open: data }))}
      noFooter
    >
      <Container>
        <Title>Aniversariantes do dia:</Title>
        <List list={alunos} onEmptyLabel="Nenhum aluno faz aniversário hoje" />

        <ProgressBar
          step={step <= maxSteps ? step : 1}
          maxSteps={maxSteps}
          onBulletClick={_step =>
            dispatch(setStep({ step: _step, verify: false }))
          }
        />

        {/* <MessageStep active={step === STEPS.MESSAGE}>
          <MessageSetup />
        </MessageStep>

        <MessageStep active={step === STEPS.PLATFORMS}>
          <PlatformsSetup />
        </MessageStep>
        <MessageStep active={step === STEPS.CONFIRM}>
          <ConfirmEnvio />
        </MessageStep> */}
      </Container>
    </ModalHelper>
  );
};

export default AniversariantesModal;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalHelper, ProgressBar, MessageStep } from '~/components';
import { Title, List } from '~/components/_common';
import { Container } from './styles';

const STEPS = {
  MESSAGE: 1,
  CRITERIA: 2,
};

const AniversariantesModal = ({ visible, onSetVisible }) => {
  const alunos = [
    { label: 'Wellington', value: '19 anos' },
    { label: 'Kauan', value: '13 anos' },
  ];

  const formId = 'aniversariantes-modal';
  const [step, setStep] = useState(1);
  const maxSteps = 3;

  // function _handleSubmit(data) {
  //   // handleSubmit(data);
  //   console.log({ data });
  //   document.getElementById(formId).reset();
  // }

  return (
    <ModalHelper
      title="ANIVERSARIANTES DO DIA"
      visible={visible}
      onSetVisible={onSetVisible}
      formId={formId}
    >
      <Container>
        <Title>Aniversariantes do dia:</Title>
        <List list={alunos} onEmptyLabel="Nenhum aluno faz aniversário hoje" />

        <ProgressBar
          step={step}
          maxSteps={maxSteps}
          onBulletClick={_step => setStep(_step)}
        />

        <MessageStep active={step === STEPS.MESSAGE}>aqui aaaaaaa</MessageStep>

        <MessageStep active={step === STEPS.CRITERIA}>aqui 2</MessageStep>
      </Container>
    </ModalHelper>
  );
};

AniversariantesModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};

export default AniversariantesModal;

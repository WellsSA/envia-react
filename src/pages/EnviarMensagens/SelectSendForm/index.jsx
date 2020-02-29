import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Title from '../../../components/Title';
import StepNavigator from '../StepNavigator';
import { setupSendTo } from '../../../store/modules/message/actions';

import { Container, Content, SendToOption } from './styles';

export default function SelectSendForm({ sendTo: _sendTo }) {
  const dispatch = useDispatch();
  const [sendTo, setSendTo] = useState(_sendTo);
  function displayOptions() {
    const { alunos, responsaveis } = sendTo;

    return (alunos ? 'Alunos, ' : '') + (responsaveis ? 'Responsáveis, ' : '');
  }

  function toggleSendTo(key) {
    setSendTo(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <Container>
      <Title>Enviar para: {displayOptions()}</Title>
      <Content>
        <SendToOption onClick={() => toggleSendTo('alunos')}>
          Aluno
        </SendToOption>
        <SendToOption onClick={() => toggleSendTo('responsaveis')}>
          Responsável
        </SendToOption>
      </Content>
      <StepNavigator onConfirm={() => dispatch(setupSendTo(sendTo))} />
    </Container>
  );
}

SelectSendForm.propTypes = {
  sendTo: PropTypes.objectOf(PropTypes.bool).isRequired,
};

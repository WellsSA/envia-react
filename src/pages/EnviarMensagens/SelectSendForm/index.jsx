import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../components/Title';

import { Container, Content, SendToOption } from './styles';

export default function SelectSendForm({ sendTo, setSendTo }) {
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
    </Container>
  );
}

SelectSendForm.propTypes = {
  sendTo: PropTypes.objectOf(PropTypes.bool).isRequired,
  setSendTo: PropTypes.func.isRequired,
};

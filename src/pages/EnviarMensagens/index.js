import React from 'react';
import { MdAccessAlarm } from 'react-icons/md';
import { Container, ProgressBar, MessageStep } from './styles';

import NamedSection from '../../components/NamedSection';
import MessageForm from './MessageForm';

export default function EnviarMensagens() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={MdAccessAlarm}>
        <ProgressBar step="1">ProgressBar</ProgressBar>

        <MessageStep step="1">
          <MessageForm onSubmit={handleSubmit} />
        </MessageStep>
      </NamedSection>
    </Container>
  );
}

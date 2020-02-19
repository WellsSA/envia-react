import React, { useState } from 'react';
import { MdAccessAlarm } from 'react-icons/md';
import { Container, ProgressBar, MessageStep } from './styles';

import NamedSection from '../../components/NamedSection';
import MessageForm from './MessageForm';
import Title from '../../components/Title';
import SelectSendForm from './SelectSendForm';

export default function EnviarMensagens() {
  const [step, setStep] = useState(2);
  const [sendTo, setSendTo] = useState({
    alunos: true,
    responsaveis: false,
  });

  function handleSubmit(data) {
    console.log(data);
    setStep(2);
  }

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={MdAccessAlarm}>
        <ProgressBar step="1">ProgressBar</ProgressBar>

        <MessageStep active={step === 1}>
          <MessageForm onSubmit={handleSubmit} />
        </MessageStep>

        <MessageStep active={step === 2}>
          <SelectSendForm sendTo={sendTo} setSendTo={setSendTo} />
        </MessageStep>

        <MessageStep active={step === 3}>
          <Title>QUAL É O CRITÉRIO PARA A SELEÇÃO DOS ALUNOS?</Title>
          <Title>SELECIONE OS ALUNOS QUE DESEJA</Title>
        </MessageStep>

        <div>
          <button type="button" onClick={() => setStep(step - 1)}>
            Prev
          </button>
          <button type="button" onClick={() => setStep(step + 1)}>
            next
          </button>
        </div>
      </NamedSection>
    </Container>
  );
}

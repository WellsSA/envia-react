import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NamedSection, ProgressBar } from '../../components';
import { Button, Title } from '../../components/_common';
import {
  nextStep,
  prevStep,
  setStep,
} from '../../store/modules/message/actions';
import { Container, MessageStep } from './styles';
import { MessageForm, CriteriaSetup } from './Steps';
import { Platforms, ConfirmEnvio, SendMessage } from './_components';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.message.curStep);

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={FaTelegramPlane}>
        <ProgressBar
          step={step}
          maxSteps={5}
          onBulletClick={_step => dispatch(setStep({ step: _step }))}
        />

        <MessageStep active={step === 1}>
          <MessageForm />
        </MessageStep>

        {/* Nota: Este passo ficará para depois do MVP
        <MessageStep active={step === 2}>
          <SelectSendForm sendTo={sendTo} />
        </MessageStep>
        */}

        <MessageStep active={step === 2}>
          <CriteriaSetup />
        </MessageStep>

        <MessageStep active={step === 3}>
          <Title>Selecione os alunos que deseja enviar:</Title>
          {/* <AlunosDataTable tableData={filteredAlunos} /> */}
          {/* <div>Filtro: {filter.criteria}</div> */}
          {/* <div>Data: {filter.data}</div> */}
        </MessageStep>

        <MessageStep active={step === 4}>
          <Title>Selecione a forma de envio:</Title>

          <Platforms />
        </MessageStep>

        <MessageStep active={step === 5}>
          <Title>Confirme as informações do seu envio:</Title>
          <ConfirmEnvio />
          <SendMessage />
        </MessageStep>

        <div>
          <Button onClick={() => dispatch(prevStep())}>Prev</Button>
          <Button onClick={() => dispatch(nextStep())}>next</Button>
        </div>
      </NamedSection>
    </Container>
  );
}

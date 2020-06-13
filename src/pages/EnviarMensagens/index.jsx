import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NamedSection, ProgressBar } from '../../components';
import { setStep } from '~/store/modules/message/actions';
import { Container, MessageStep } from './styles';
import {
  MessageSetup,
  CriteriaSetup,
  AlunosSetup,
  PlatformsSetup,
  ConfirmEnvio,
} from './Steps';

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
          <MessageSetup />
        </MessageStep>

        <MessageStep active={step === 2}>
          <CriteriaSetup />
        </MessageStep>

        <MessageStep active={step === 3}>
          <AlunosSetup />
        </MessageStep>

        <MessageStep active={step === 4}>
          <PlatformsSetup />
        </MessageStep>

        <MessageStep active={step === 5}>
          <ConfirmEnvio />
        </MessageStep>

        {/* Nota: Este passo ficará para depois do MVP
        <MessageStep active={step === 2}>
          <SelectSendForm sendTo={sendTo} />
        </MessageStep>
        */}
      </NamedSection>
    </Container>
  );
}

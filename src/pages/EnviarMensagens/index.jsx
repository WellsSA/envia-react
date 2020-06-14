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
import { STEPS } from '~/store/modules/message/data';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.message.curStep);

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={FaTelegramPlane}>
        <ProgressBar
          step={step}
          maxSteps={Object.keys(STEPS).length}
          onBulletClick={_step => dispatch(setStep({ step: _step }))}
        />

        <MessageStep active={step === STEPS.MESSAGE}>
          <MessageSetup />
        </MessageStep>

        <MessageStep active={step === STEPS.CRITERIA}>
          <CriteriaSetup />
        </MessageStep>

        <MessageStep active={step === STEPS.STUDENTS}>
          <AlunosSetup />
        </MessageStep>

        <MessageStep active={step === STEPS.PLATFORMS}>
          <PlatformsSetup />
        </MessageStep>

        <MessageStep active={step === STEPS.CONFIRM}>
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

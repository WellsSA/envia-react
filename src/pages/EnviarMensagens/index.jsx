import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAccessAlarm } from 'react-icons/md';
import { nextStep, prevStep } from '../../store/modules/message/actions';
import NamedSection from '../../components/NamedSection';
import Title from '../../components/Title';
import MessageForm from './MessageForm';
import SelectSendForm from './SelectSendForm';
import Criteria from './Criteria';
import { Container, MessageStep, ProgressBar } from './styles';
// import { store } from '../../store';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.message.curStep);
  const sendTo = useSelector(state => state.message.sendTo);
  const [criteria, setCriteria] = useState('');

  useEffect(() => {
    console.log({ sendTo });
    console.log({ step });
  }, [sendTo, step]);

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={MdAccessAlarm}>
        <ProgressBar step="1">ProgressBar</ProgressBar>

        <MessageStep active={step === 1}>
          <MessageForm />
        </MessageStep>

        <MessageStep active={step === 2}>
          <SelectSendForm sendTo={sendTo} />
        </MessageStep>

        <MessageStep active={step === 3}>
          <Title>Alunos do(a): Professor(Juliano, zezim)</Title>

          <Criteria setCriteria={setCriteria} />
        </MessageStep>

        <MessageStep active={step === 4}>
          <Title>Selecione os alunos que deseja:</Title>
        </MessageStep>

        <div>
          <button type="button" onClick={() => dispatch(prevStep())}>
            Prev
          </button>
          <button type="button" onClick={() => dispatch(nextStep())}>
            next
          </button>
        </div>
      </NamedSection>
    </Container>
  );
}

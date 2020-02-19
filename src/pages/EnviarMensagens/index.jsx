import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAccessAlarm } from 'react-icons/md';
import { helloWorld } from '../../store/modules/message/actions';
import NamedSection from '../../components/NamedSection';
import Title from '../../components/Title';
import MessageForm from './MessageForm';
import SelectSendForm from './SelectSendForm';
import Criteria from './Criteria';
import { Container, MessageStep, ProgressBar } from './styles';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.message.loading);
  const [step, setStep] = useState(3);
  const [sendTo, setSendTo] = useState({
    alunos: true,
    responsaveis: false,
  });
  const [criteria, setCriteria] = useState('');

  useEffect(() => {
    console.log({ criteria });
    console.log({ loading });
  }, [criteria, loading, step]);

  function handleSubmit(data) {
    console.log(data);
    setStep(2);
    dispatch(helloWorld('aquiiiiiiii'));
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
          <Title>Alunos do(a): Professor(Juliano, zezim)</Title>

          <Criteria setCriteria={setCriteria} />
        </MessageStep>

        <MessageStep active={step === 4}>
          <Title>Selecione os alunos que deseja:</Title>
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

import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NamedSection, Title } from '../../components';
import {
  nextStep,
  prevStep,
  setStep,
} from '../../store/modules/message/actions';
import AlunosDataTable from './CriteriaTableGenerator/AlunosDataTable';
import { Container, MessageStep } from './styles';
import {
  Criteria,
  CriteriaTableGenerator,
  MessageForm,
  Platforms,
  ConfirmEnvio,
  SendMessage,
  ProgressBar,
} from './_components';

// import api from '../../services/api';
// import { store } from '../../store';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.message.curStep);
  // const sendTo = useSelector(state => state.message.sendTo);
  const filter = useSelector(state => state.message.filter);
  const filteredAlunos =
    useSelector(state => state.message.filteredAlunos) || [];
  const [criteria, setCriteria] = useState('');
  // const alunos = useSelector(state => state.message.alunos);

  useEffect(() => {
    console.log({ filteredAlunos });
  }, [filteredAlunos]);

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={FaTelegramPlane}>
        <ProgressBar
          step={step}
          maxSteps={5}
          onBulletClick={
            _step => dispatch(setStep({ step: _step }))
            // _step <= step ? dispatch(setStep({ step: _step })) : {}
          }
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
          <Title>Alunos do(a): Professor(Juliano, zezim)</Title>

          <Criteria setCriteria={setCriteria} />
          <CriteriaTableGenerator criteria={criteria} />
        </MessageStep>

        <MessageStep active={step === 3}>
          <Title>Selecione os alunos que deseja enviar:</Title>
          <AlunosDataTable tableData={filteredAlunos} />
          <div>Filtro: {filter.criteria}</div>
          <div>Data: {filter.data}</div>
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

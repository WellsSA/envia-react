import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAccessAlarm } from 'react-icons/md';
import { nextStep, prevStep } from '../../store/modules/message/actions';
import NamedSection from '../../components/NamedSection';
import Title from '../../components/Title';
import MessageForm from './MessageForm';
import SelectSendForm from './SelectSendForm';
import Criteria from './Criteria';
import CriteriaTableGenerator from './CriteriaTableGenerator';
import { Container, MessageStep, ProgressBar } from './styles';
import AlunosTable from '../Alunos/AlunosTable';
// import api from '../../services/api';
// import { store } from '../../store';

export default function EnviarMensagens() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.message.curStep);
  // const sendTo = useSelector(state => state.message.sendTo);
  const filter = useSelector(state => state.message.filter);
  const filteredAlunos =
    useSelector(state => state.message.filteredAlunos) || [];
  // const [filteredAlunos, setFilteredAlunos] = useState([]);
  const [criteria, setCriteria] = useState('');
  const alunos = useSelector(state => state.message.alunos);

  useEffect(() => {
    // console.log({ sendTo, criteria });
    // console.log({ step });
    // console.log({ alunos });
    console.log({ filteredAlunos });
  }, [filteredAlunos]);

  // useEffect(() => {
  //   async function getAlunosByCriteria() {
  //     const { data, status } = await api.get('alunos');

  //     if (status !== 200) return [];
  //     console.log('response', data);
  //     setFilteredAlunos(data);
  //   }
  //   getAlunosByCriteria();
  // }, [criteria]);

  return (
    <Container>
      <NamedSection name="Enviar mensagens" icon={MdAccessAlarm}>
        <ProgressBar step="1">ProgressBar</ProgressBar>

        <MessageStep active={step === 1}>
          <MessageForm />
        </MessageStep>

        {/* <MessageStep active={step === 2}>
          <SelectSendForm sendTo={sendTo} />
        </MessageStep> */}

        <MessageStep active={step === 3}>
          <Title>Alunos do(a): Professor(Juliano, zezim)</Title>

          <Criteria setCriteria={setCriteria} />
          <CriteriaTableGenerator criteria={criteria} />
        </MessageStep>

        <MessageStep active={step === 4}>
          <Title>Selecione os alunos que deseja enviar:</Title>
          <AlunosTable
            tableData={filteredAlunos}
            actions={[
              {
                tooltip: 'Selecionar estes alunos(as)',
                icon: 'check',
                onClick: (evt, data) => {
                  console.log(evt, data);
                  return null;
                },
              },
            ]}
          />
          <div>Filtro: {filter.criteria}</div>
          <div>Data: {filter.data}</div>
        </MessageStep>

        <MessageStep active={step === 5}>
          <Title>Selecione a forma de envio:</Title>
          <div>Email</div>
          <div>SMS</div>
          <div>Whatsapp</div>
        </MessageStep>

        <MessageStep active={step === 6}>
          <Title>Confirme as informações do seu envio:</Title>
          Mensagem / Criterio / Plataforma
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

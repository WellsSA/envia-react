import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTelegramPlane } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';
// import { GoMail, GoComment } from 'react-icons/go';
import {
  Container,
  Column,
  ColumnTitle,
  Criteria,
  Platforms,
  Alunos,
  Aluno,
  Marker,
} from './styles';
import { prevStep } from '~/store/modules/message/actions';
import { Title } from '~/components/_common';
import StepNavigator from '../../StepNavigator';
// import Criterion from '../CriteriaSetup/Criteria/Criterion';

export default function ConfirmEnvio() {
  const dispatch = useDispatch();
  const {
    message: { titulo, saudacao, mensagem },
    // filter: { criteria },
    alunos,
    // platforms,
  } = useSelector(state => state.message);

  const platforms = useSelector(state => state.message.platforms);

  function handleConfirm() {
    if (platforms.email) {
      alert('sending mail!');
    }
  }
  return (
    <>
      <Title>Confirme as informações do seu envio:</Title>
      <Container>
        <Column className="message">
          <ColumnTitle>Mensagem:</ColumnTitle>
          <h2>{titulo}</h2>
          <span>{saudacao}</span>
          <p>{mensagem}</p>
        </Column>
        <Column>
          <Criteria>
            <ColumnTitle>Critério:</ColumnTitle>
            {(() => {
              // switch (criteria) {
              //   case 'Professores Específicos':
              //     return <Criterion icon={FaUser} label={criteria} />;
              //   default:
              //     return <></>;
              // }
            })()}
          </Criteria>
          <Criteria>
            <ColumnTitle>Plataforma:</ColumnTitle>
            <Platforms>
              {/* <Criterion visible={platforms.email} icon={GoMail} label="Email" />
            <Criterion visible={platforms.sms} icon={GoComment} label="SMS" />
            <Criterion
              visible={platforms.whatsapp}
              icon={FaWhatsapp}
              label="Whatsapp"
            /> */}
            </Platforms>
          </Criteria>
        </Column>
        <Column>
          <ColumnTitle>Alunos:</ColumnTitle>
          <Alunos>
            {alunos.map(({ id, name }) => (
              <Aluno key={id}>{name}</Aluno>
            ))}
          </Alunos>
        </Column>
      </Container>
      <Marker />
      <StepNavigator
        centered
        confirmLabel="Enviar"
        confirmIcon={FaTelegramPlane}
        onCancel={() => dispatch(prevStep())}
        onConfirm={handleConfirm}
      />
    </>
  );
}

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
import Criterion from '../CriteriaSetup/Criteria/Criterion';
import { CRITERION, PLATFORMS } from '~/store/modules/message/data';

export default function ConfirmEnvio() {
  const dispatch = useDispatch();
  const {
    message: { title, greeting, content },
    criteria,
    alunos,
    platforms,
  } = useSelector(state => state.message);

  function handleConfirm() {
    // if (platforms.email) {
    //   alert('sending mail!');
    // }
    alert('sending...');
  }
  return (
    <>
      <Title>Confirme as informações do seu envio:</Title>
      <Container>
        <Column className="message">
          <ColumnTitle>Mensagem:</ColumnTitle>
          <h2>{title}</h2>
          <span>{greeting}</span>
          <p>{content}</p>
        </Column>
        <Column>
          <Criteria>
            <ColumnTitle>Critério:</ColumnTitle>
            {criteria && (
              <Criterion
                label={CRITERION[criteria].label}
                icon={CRITERION[criteria].icon}
              />
            )}
          </Criteria>
          <Criteria>
            <ColumnTitle>Plataforma:</ColumnTitle>
            <Platforms>
              {platforms.map(value => (
                <Criterion
                  key={`plat${value}`}
                  icon={PLATFORMS[value].icon}
                  label={PLATFORMS[value].label}
                />
              ))}
            </Platforms>
          </Criteria>
        </Column>
        <Column>
          <ColumnTitle>Alunos:</ColumnTitle>
          <Alunos>
            {criteria === CRITERION.ALL.value ? (
              <Aluno>Todos os alunos</Aluno>
            ) : (
              <>
                {alunos.map(({ id, name }) => (
                  <Aluno key={id}>{name}</Aluno>
                ))}
              </>
            )}
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

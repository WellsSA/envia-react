import React from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoComment } from 'react-icons/go';
import {
  Container,
  Column,
  ColumnTitle,
  Criteria,
  Platforms,
  Alunos,
  Aluno,
} from './styles';
import Criterion from '../Criteria/Criterion';

export default function ConfirmEnvio() {
  const {
    message: { titulo, saudacao, mensagem },
    filter: { criteria },
    alunos,
    platforms,
  } = useSelector(state => state.message);

  return (
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
            switch (criteria) {
              case 'Professores Específicos':
                return <Criterion icon={FaUser} label={criteria} />;
              default:
                return <></>;
            }
          })()}
        </Criteria>
        <Criteria>
          <ColumnTitle>Plataforma:</ColumnTitle>
          <Platforms>
            <Criterion visible={platforms.email} icon={GoMail} label="Email" />
            <Criterion visible={platforms.sms} icon={GoComment} label="SMS" />
            <Criterion
              visible={platforms.whatsapp}
              icon={FaWhatsapp}
              label="Whatsapp"
            />
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
  );
}

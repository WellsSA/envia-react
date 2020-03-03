import React from 'react';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
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
  const { message, filter, alunos, platforms } = useSelector(
    state => state.message
  );

  console.log({ message, filter, alunos, platforms });
  return (
    <Container>
      <Column className="message">
        <ColumnTitle>Mensagem:</ColumnTitle>
        <h2>Titulo</h2>
        <span>Saudação</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam
          veniam consectetur, in iure ut laboriosam facilis at obcaecati,
          officia ipsa odio cum qui! Vero laboriosam voluptatem facere natus
          sit!
        </p>
      </Column>
      <Column>
        <Criteria>
          <ColumnTitle>Critério:</ColumnTitle>
          <Criterion icon={FaUser} label="Alunos" />
        </Criteria>
        <Criteria>
          <ColumnTitle>Plataforma:</ColumnTitle>
          <Platforms>
            <Criterion icon={FaUser} label="E-mail" />
            <Criterion icon={FaUser} label="SMS" />
            <Criterion icon={FaUser} label="ZapZap" />
          </Platforms>
        </Criteria>
      </Column>
      <Column>
        <ColumnTitle>Alunos:</ColumnTitle>
        <Alunos>
          <Aluno>Zezim</Aluno>
          <Aluno>Fulano</Aluno>
          <Aluno>Da silva</Aluno>
        </Alunos>
      </Column>
    </Container>
  );
}

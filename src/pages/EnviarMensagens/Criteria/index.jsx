import React from 'react';
import PropTypes from 'prop-types';
import { MdAccessAlarm } from 'react-icons/md';
import { Title } from '../../../components/_common';
import { Container, Content } from './styles';
import Criterion from './Criterion';

export default function Criteria({ setCriteria }) {
  return (
    <Container>
      <Title>Qual é o critério para a seleção dos alunos?</Title>
      <Content>
        <div>
          <Criterion
            label="Todos os alunos"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
          <Criterion
            label="Alunos Específicos"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
          <Criterion
            label="Turmas Específicas"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
        </div>
        <div>
          <Criterion
            label="Professores Específicos"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
          <Criterion
            label="Cursos Específicos"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
          <Criterion
            label="Responsáveis"
            icon={MdAccessAlarm}
            onClick={setCriteria}
          />
        </div>
      </Content>
    </Container>
  );
}

Criteria.propTypes = {
  setCriteria: PropTypes.func.isRequired,
};

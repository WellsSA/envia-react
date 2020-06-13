import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from '../../../components/_common';
import { Container, Content } from './styles';
import Criterion from './Criterion';
import { setupCriteria } from '../../../store/modules/message/actions';
import { exhibition } from '../../../store/modules/message/data';

export default function Criteria() {
  const dispatch = useDispatch();

  const setCriteria = criteria => dispatch(setupCriteria({ criteria }));

  return (
    <Container>
      <Title>Qual é o critério para a seleção dos alunos?</Title>
      <Content>
        <div>
          {exhibition.map(({ label, icon, value }, i) => (
            <Criterion
              key={`criterion${i}`}
              label={label}
              icon={icon}
              onClick={() => setCriteria(value)}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
}

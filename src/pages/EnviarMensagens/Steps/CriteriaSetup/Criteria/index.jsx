import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Criterion from './Criterion';
import { setupCriteria } from '~/store/modules/message/actions';
import { CRITERION_ARR } from '~/store/modules/message/data';

export default function Criteria() {
  const dispatch = useDispatch();

  const setCriteria = criteria => dispatch(setupCriteria({ criteria }));

  return (
    <Container>
      <Content>
        {CRITERION_ARR.map(({ label, icon, value }, i) => (
          <Criterion
            key={`criterion${i}`}
            label={label}
            icon={icon}
            onClick={() => setCriteria(value)}
          />
        ))}
      </Content>
    </Container>
  );
}

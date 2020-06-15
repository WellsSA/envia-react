import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Criterion from './Criterion';
import { setupCriteria, setupFilters } from '~/store/modules/message/actions';
import { CRITERION, CRITERION_ARR } from '~/store/modules/message/data';

export default function Criteria() {
  const dispatch = useDispatch();

  const setCriteria = criteria => {
    dispatch(setupCriteria({ criteria }));

    if (criteria === CRITERION.STUDENTS.value)
      dispatch(setupFilters({ filters: ['students'] }));
    else if (criteria === CRITERION.ALL.value)
      dispatch(setupFilters({ filters: ['all'] }));
  };

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

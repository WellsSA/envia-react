import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import ProfessoresDataTable from './ProfessoresDataTable';
import { setupFilters } from '~/store/modules/message/actions';
import { CRITERION } from '~/store/modules/message/data';

export default function CriteriaTableGenerator() {
  const dispatch = useDispatch();
  const { criteria, keepEase } = useSelector(state => state.message);

  const actions = [
    {
      tooltip: 'Aplicar critérios selecionados',
      icon: 'check',
      onClick: (evt, data) => {
        console.log(evt, data);

        dispatch(setupFilters({ filters: data }));

        return null;
      },
    },
  ];

  return (
    <Container>
      {criteria}
      {!keepEase ? (
        (() => {
          switch (criteria) {
            case CRITERION.professores.value:
              return <ProfessoresDataTable actions={actions} />;
            default:
              return <></>;
          }
        })()
      ) : (
        <></>
      )}
    </Container>
  );
}

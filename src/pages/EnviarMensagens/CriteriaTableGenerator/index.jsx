import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import ProfessoresDataTable from './ProfessoresDataTable';
import { setupFilters } from '../../../store/modules/message/actions';

export default function CriteriaTableGenerator() {
  const dispatch = useDispatch();
  const criteria = useSelector(state => state.message.criteria);

  const actions = [
    {
      tooltip: 'Aplicar critérios selecionados',
      icon: 'check',
      onClick: (evt, data) => {
        console.log(evt, data);

        dispatch(
          setupFilters({
            criteria,
            data: data.map(d => d.name),
          })
        );

        return null;
      },
    },
  ];

  return (
    <Container>
      {criteria}
      {(() => {
        switch (criteria) {
          case 'Professores Específicos':
            return <ProfessoresDataTable actions={actions} />;
          default:
            return <></>;
        }
      })()}
    </Container>
  );
}

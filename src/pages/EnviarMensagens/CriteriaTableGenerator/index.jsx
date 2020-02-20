import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';
import ProfessoresDataTable from './ProfessoresDataTable';
import { setupFilters } from '../../../store/modules/message/actions';

export default function CriteriaTableGenerator({ criteria }) {
  const dispatch = useDispatch();

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

CriteriaTableGenerator.propTypes = {
  criteria: PropTypes.string.isRequired,
};

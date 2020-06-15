import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import ProfessoresDataTable from './ProfessoresDataTable';
import TurmasDataTable from './TurmasDataTable';
import CursosDataTable from './CursosDataTable';
import ResponsaveisDataTable from './ResponsaveisDataTable';
import { setupFilters } from '~/store/modules/message/actions';
import { CRITERION } from '~/store/modules/message/data';

export default function CriteriaTableGenerator() {
  const dispatch = useDispatch();
  const { criteria, keepEase } = useSelector(state => state.message);

  useEffect(() => {
    if (criteria === CRITERION.STUDENTS.value) {
      dispatch(setupFilters({ filters: ['students'] }));
    } else if (criteria === CRITERION.ALL.value) {
      dispatch(setupFilters({ filters: ['all'] }));
    }
  }, [criteria, dispatch]);

  const actions = [
    {
      tooltip: 'Aplicar critérios selecionados',
      icon: 'check',
      onClick: (_, data) => {
        dispatch(setupFilters({ filters: data }));
      },
    },
  ];

  return (
    <Container>
      {criteria}
      {!keepEase ? (
        (() => {
          switch (criteria) {
            case CRITERION.TEACHERS.value:
              return <ProfessoresDataTable actions={actions} />;
            case CRITERION.CLASSES.value:
              return <TurmasDataTable actions={actions} />;
            case CRITERION.COURSES.value:
              return <CursosDataTable actions={actions} />;
            case CRITERION.RESPONSIBLES.value:
              return <ResponsaveisDataTable actions={actions} />;
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

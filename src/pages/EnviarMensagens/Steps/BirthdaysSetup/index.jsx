import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Title, List } from '~/components/_common';
import { setupAniversariantes } from '~/store/modules/message/actions';
import { CRITERION } from '~/store/modules/message/data';

import StepNavigator from '../../StepNavigator';

function BirthdaysSetup({ alunos }) {
  const dispatch = useDispatch();

  const setBirthdays = () => {
    dispatch(
      setupAniversariantes({
        alunos,
        criteria: CRITERION.BIRTHDAYS.value,
      })
    );
  };
  return (
    <>
      <Title>Aniversariantes do dia:</Title>
      <List
        list={alunos.map(({ name, birthDate }) => ({
          label: name,
          value: birthDate,
        }))}
        onEmptyLabel="Nenhum aluno faz aniversário hoje"
      />
      <StepNavigator notCancelable onConfirm={setBirthdays} />
    </>
  );
}

BirthdaysSetup.propTypes = {
  alunos: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BirthdaysSetup;

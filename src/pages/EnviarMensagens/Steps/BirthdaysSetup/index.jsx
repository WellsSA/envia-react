import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Title, List } from '~/components/_common';
import { SectionDivisor } from '~/components';
import { setupAniversariantes } from '~/store/modules/message/actions';
import { CRITERION } from '~/store/modules/message/data';
import AniversariantesIMG from '~/assets/dashboard/aniversariantes.png';
import StepNavigator from '../../StepNavigator';
import { yearsFromNow } from '~/utils/textHelper';

import { Container } from './styles';

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
    <Container>
      <Title>Aniversariantes do dia:</Title>
      <SectionDivisor>
        <section>
          <List
            list={alunos.map(({ name, birthDate }) => ({
              label: `${yearsFromNow(birthDate)} anos,`,
              value: name,
            }))}
            onEmptyLabel="Nenhum aluno faz aniversário hoje"
          />
        </section>
        <section>
          <img src={AniversariantesIMG} alt="Aniversariantes" />
        </section>
      </SectionDivisor>

      <StepNavigator notCancelable onConfirm={setBirthdays} />
    </Container>
  );
}

BirthdaysSetup.propTypes = {
  alunos: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BirthdaysSetup;

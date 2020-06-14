import React from 'react';

import Criteria from './Criteria';
import CriteriaTableGenerator from './CriteriaTableGenerator';
import { Title } from '~/components/_common';

function CriteriaSetup() {
  return (
    <>
      <Title>Qual é o critério para a seleção dos alunos?</Title>
      {/* <Title>Alunos do(a): Professor(Juliano, zezim)</Title> */}

      <Criteria />
      <CriteriaTableGenerator />
    </>
  );
}

export default CriteriaSetup;

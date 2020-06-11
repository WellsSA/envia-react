import React from 'react';

import { FaCogs } from 'react-icons/fa';
import {
  SectionMarker,
  InputWrapper,
  ListDisplayer,
} from '../../../components';

function ConfigSection() {
  const list = [
    {
      label: 'Tipo:',
      value: 'ENVIA',
    },
    {
      label: 'Expira em:',
      value: '10 dias',
    },
    {
      label: 'Licença:',
      value: 'W31154MB',
    },
    {
      label: 'Vigência:',
      value: 'Vitalícia',
    },
  ];

  const placeholder = {
    name: 'Nome da escola',
    password: '*******',
  };

  return (
    <section>
      <SectionMarker label="Informações da conta" icon={FaCogs} />
      <InputWrapper
        id="password"
        type="password"
        label="Alterar senha:"
        placeholder={placeholder.password}
      />
      <InputWrapper id="licence" label="Atualizar licença:" labelOnly noStyled>
        <ListDisplayer list={list} />
      </InputWrapper>
    </section>
  );
}

export default ConfigSection;

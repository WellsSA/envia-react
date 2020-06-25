import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { SectionMarker, InputWrapper } from '~/components';
import { List } from '~/components/_common';

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
  newPassword: 'Nova senha (opcional)',
  password: 'Senha atual (obrigatório)',
};

function ConfigSection() {
  return (
    <section>
      <SectionMarker label="Informações da conta" icon={FaCogs} />
      <InputWrapper
        id="newPassword"
        type="password"
        label="Alterar senha:"
        placeholder={placeholder.newPassword}
      />
      <InputWrapper
        id="password"
        type="password"
        label="Senha:"
        placeholder={placeholder.password}
      />
      <InputWrapper label="Atualizar licença:" labelOnly noStyled>
        <List list={list} />
      </InputWrapper>
    </section>
  );
}

export default ConfigSection;

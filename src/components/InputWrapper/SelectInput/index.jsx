import React from 'react';
import PropTypes from 'prop-types';
// import { Select, MenuItem } from '@material-ui/core';
import { Select } from '@rocketseat/unform';
import { Container } from './styles';

export default function SelectInput({ id, name }) {
  const data = [
    {
      title: 'Curso teste',
      id: '2',
    },
    {
      title: 'Novo curso',
      id: '3',
    },
    {
      title: 'Esse curso sempre existiu',
      id: '4',
    },
    {
      title: 'Teste',
      id: '5',
    },
  ];
  return (
    <Container>
      <Select name={name} placeholder="Selecionar..." options={data} />
    </Container>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

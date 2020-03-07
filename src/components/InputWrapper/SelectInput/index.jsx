import React from 'react';
import PropTypes from 'prop-types';
// import { Select, MenuItem } from '@material-ui/core';
import { Select } from '@rocketseat/unform';
import { Container } from './styles';

export default function SelectInput({ name, options, ...props }) {
  return (
    <Container>
      <Select
        name={name}
        placeholder="Selecionar..."
        options={options}
        {...props}
      />
    </Container>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

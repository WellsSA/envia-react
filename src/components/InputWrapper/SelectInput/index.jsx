import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Select, MenuItem } from '@material-ui/core';
import { Select } from '@rocketseat/unform';
import { Container } from './styles';

export default function SelectInput({ defaultValue, name, options, ...props }) {
  useEffect(() => {
    return () => {
      if (defaultValue) {
        const selector = document.querySelector(
          `#${name} option[value="${defaultValue}"]`
        );

        if (selector) {
          document.querySelector(`#${name}`).selectedIndex = selector.index;
        }
      }
    };
  });

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
  defaultValue: PropTypes.string,
};

SelectInput.defaultProps = {
  defaultValue: '',
};

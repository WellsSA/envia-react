import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Radios({ value, onTap }) {
  return (
    <Container>
      <label htmlFor="isResponsible">Sim</label>
      <input
        id="isResponsible"
        type="radio"
        value="sim"
        checked={value}
        readOnly
        onClick={() => onTap(true)}
      />
      <label htmlFor="isResponsibleNo">Não</label>
      <input
        id="isResponsibleNo"
        type="radio"
        value="nao"
        checked={!value}
        readOnly
        onClick={() => onTap(false)}
      />
    </Container>
  );
}

Radios.propTypes = {
  value: PropTypes.bool.isRequired,
  onTap: PropTypes.func.isRequired,
};

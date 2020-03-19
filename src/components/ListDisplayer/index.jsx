import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Title({ list }) {
  return (
    <Container>
      {list.map(({ label, value }, index) => (
        <li key={index}>
          <strong>{label}</strong>
          <span>{value}</span>
        </li>
      ))}
    </Container>
  );
}

Title.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

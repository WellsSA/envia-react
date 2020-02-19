import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Title({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}

Title.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

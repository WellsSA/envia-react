import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SectionDivisor({ children }) {
  return <Container>{children}</Container>;
}

SectionDivisor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

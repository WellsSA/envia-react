import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SectionDivisor({ children, className }) {
  return <Container className={className}>{children}</Container>;
}

SectionDivisor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

SectionDivisor.defaultProps = {
  className: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Title({ centered, children }) {
  return <Container centered={centered}>{children}</Container>;
}

Title.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  centered: PropTypes.bool,
};

Title.defaultProps = {
  centered: false,
};

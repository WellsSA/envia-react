import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Title({ centered, children }) {
  return <Container centered={centered}>{children}</Container>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  centered: PropTypes.bool,
};

Title.defaultProps = {
  centered: false,
};

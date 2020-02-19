import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function StepNavigator({ children }) {
  return <Container>{children}</Container>;
}

StepNavigator.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

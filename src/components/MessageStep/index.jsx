import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function MessageStep({ active, children }) {
  return <Container active={active}>{children}</Container>;
}

MessageStep.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

MessageStep.defaultProps = {
  active: false,
};

export default MessageStep;

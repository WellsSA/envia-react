import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';
import { Container } from './styles';

function Alert({ kind, children }) {
  return (
    <Container kind={kind}>
      <FaInfoCircle />
      {children}
    </Container>
  );
}

Alert.propTypes = {
  kind: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Alert.defaultProps = {
  kind: 'success',
};

export default Alert;

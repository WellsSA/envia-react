import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';

function MessageStep({ active, children }) {
  const isNext = useSelector(state => state.message.isNext);
  return (
    <Container active={active} next={isNext}>
      {children}
    </Container>
  );
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

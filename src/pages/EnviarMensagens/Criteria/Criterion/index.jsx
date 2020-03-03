import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Criterion({ label, icon: Icon, onClick, visible }) {
  return (
    <Container visible={visible} onClick={() => onClick(label)}>
      <Icon />
      <span>{label}</span>
    </Container>
  );
}

Criterion.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  visible: PropTypes.bool,
};

Criterion.defaultProps = {
  onClick: () => {},
  visible: true,
};

export default memo(Criterion);

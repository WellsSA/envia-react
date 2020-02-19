import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Criterion({ label, icon: Icon, onClick }) {
  return (
    <Container onClick={() => onClick(label)}>
      <Icon />
      <span>{label}</span>
    </Container>
  );
}

Criterion.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(Criterion);

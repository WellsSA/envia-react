import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Platform({ checked, icon: Icon, label, value, onTap }) {
  return (
    <Container checked={checked} kind="confirm" onClick={() => onTap(value)}>
      <Icon />
      <span>{label}</span>
    </Container>
  );
}

Platform.propTypes = {
  checked: PropTypes.bool,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
};

Platform.defaultProps = {
  checked: false,
};

export default memo(Platform);

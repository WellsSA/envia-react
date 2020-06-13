import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Platform({ icon: Icon, label, value, onTap }) {
  const platforms = useSelector(state => state.message.platforms);
  return (
    <Container
      checked={platforms[value]}
      kind="confirm"
      onClick={() => onTap(value)}
    >
      <Icon />
      <span>{label}</span>
    </Container>
  );
}

Platform.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
};

export default memo(Platform);

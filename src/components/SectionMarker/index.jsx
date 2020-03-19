import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function SectionMarker({ label, icon: Icon }) {
  return (
    <Container>
      <div>
        <Icon />
        <span>{label}</span>
      </div>
    </Container>
  );
}

SectionMarker.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default memo(SectionMarker);

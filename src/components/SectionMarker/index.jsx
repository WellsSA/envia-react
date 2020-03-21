import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function SectionMarker({ label, icon: Icon, isMain }) {
  return (
    <Container className={isMain ? 'main' : ''}>
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
  isMain: PropTypes.bool,
};

SectionMarker.defaultProps = {
  isMain: false,
};

export default memo(SectionMarker);

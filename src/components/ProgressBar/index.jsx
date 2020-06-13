import React from 'react';
import PropTypes from 'prop-types';
import { Container, Bullet, Bar } from './styles';

export default function ProgressBar({ step: _step, maxSteps, onBulletClick }) {
  const currentStep = _step;

  return (
    <Container>
      {Array(maxSteps)
        .fill(0)
        .map((_, index) => {
          const step = index + 1;
          return (
            <Bullet
              active={step <= currentStep}
              key={step}
              step={step}
              onClick={() => onBulletClick(step)}
            >
              {step}
            </Bullet>
          );
        })}
      <Bar fill={maxSteps - 1} max={maxSteps - 1} />
      <Bar active fill={currentStep - 1} max={maxSteps - 1} />
    </Container>
  );
}

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
  onBulletClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  onBulletClick: () => {},
};

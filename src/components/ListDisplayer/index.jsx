import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Title({ list, onEmptyLabel }) {
  return (
    <Container>
      {list.length ? (
        list.map(({ label, value }, index) => (
          <li key={index}>
            <strong>{label}</strong>
            <span>{value}</span>
          </li>
        ))
      ) : (
        <div>{onEmptyLabel}</div>
      )}
    </Container>
  );
}

Title.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEmptyLabel: PropTypes.string,
};

Title.defaultProps = {
  onEmptyLabel: 'Não há registros para exibir.',
};

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const List = ({ list, onEmptyLabel, kind }) => {
  return (
    <Container kind={kind}>
      {list.length ? (
        list.map(({ label, value }, index) => (
          <li key={`${value}${index + 1}`}>
            <strong>{label}</strong>
            <span>{value}</span>
          </li>
        ))
      ) : (
        <div>{onEmptyLabel}</div>
      )}
    </Container>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEmptyLabel: PropTypes.string,
  kind: PropTypes.string,
};

List.defaultProps = {
  onEmptyLabel: 'Não há registros para exibir.',
  kind: 'styled',
};

export default List;

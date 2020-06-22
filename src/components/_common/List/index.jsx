import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const List = ({ list, onEmptyLabel }) => {
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
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEmptyLabel: PropTypes.string,
};

List.defaultProps = {
  onEmptyLabel: 'Não há registros para exibir.',
};

export default List;

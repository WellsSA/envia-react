import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function Title({ children }) {
  return <h1>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

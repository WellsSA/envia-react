import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

export default function NamedSection({ name, icon: Icon, children }) {
  return (
    <Container>
      <strong className="title">
        <span>{name}</span>
        <Icon />
      </strong>

      <Content>{children}</Content>
    </Container>
  );
}

NamedSection.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function NavItem({ icon: Icon, ...props }) {
  return (
    <Container {...props}>
      <Icon />
    </Container>
  );
}

NavItem.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default NavItem;

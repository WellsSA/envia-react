import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function NavLink({ to, label, icon: Icon, onClick }) {
  return (
    <Container>
      <Link to={to} onClick={onClick}>
        <div>
          <Icon />
        </div>
        <span>{label}</span>
      </Link>
    </Container>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  onClick: () => {},
};

export default memo(NavLink);

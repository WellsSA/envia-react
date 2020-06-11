import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './styles';

function Button({ type, kind, children, onClick, className, ...props }) {
  return (
    <CustomButton
      className={`${kind} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </CustomButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  kind: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  kind: 'default',
  className: '',
};

export default Button;

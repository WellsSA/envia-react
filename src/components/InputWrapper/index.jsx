import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

export default function InputWrapper({
  id,
  label,
  placeholder,
  labelOnly,
  noStyled,
  children,
}) {
  return (
    <div className={`input ${!noStyled ? 'styled' : ''}`}>
      <label htmlFor={id}>{label}</label>

      {labelOnly ? (
        children
      ) : (
        <Input type="text" id={id} name={id} placeholder={placeholder} />
      )}
    </div>
  );
}

InputWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  labelOnly: PropTypes.bool,
  noStyled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

InputWrapper.defaultProps = {
  labelOnly: false,
  noStyled: false,
  children: <></>,
  placeholder: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import PhoneInputMask from './PhoneInputMask';

export default function InputWrapper({
  id,
  label,
  type,
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
      ) : type === 'phone' ? (
        <PhoneInputMask
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
        />
      ) : (
        <Input type="text" id={id} name={id} placeholder={placeholder} />
      )}
    </div>
  );
}

InputWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
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
  type: 'text',
  placeholder: '',
};

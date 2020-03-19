import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import PhoneInputMask from './PhoneInputMask';
import SelectInput from './SelectInput';
/*
  useCases:

  --- text input ---
  <InputWrapper
    id="name"
    label="Nome:"
    placeholder={placeholder.name}
  />

  --- select input ---
  <InputWrapper
    id="names"
    label="Nomes:"
    type="select"
    placeholder={placeholder.name}
    options={[{ id: 1, title: 'Well' }, { id: 2, title: 'Wells' }]}
    defaultValue={initialData ? initialData.name : '0'}
  />

  --- phone input ---
  <InputWrapper
    id="phone"
    label="Celular:"
    type="phone"
    placeholder={placeholder.phone}
  />

  --- labelOnly wrapper ---
  <InputWrapper
    id="birthDate"
    label="Data de nascimento:"
    labelOnly
    noStyled
  >
    {children}
  </InputWrapper>
*/
export default function InputWrapper({
  id,
  label,
  type,
  placeholder,
  labelOnly,
  noStyled,
  children,
  options,
  defaultValue,
  ...rest
}) {
  return (
    <div
      className={`input ${noStyled || type === 'select' ? '' : 'styled'} ${
        type === 'select' ? 'select' : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>

      {labelOnly ? (
        children
      ) : type === 'phone' ? (
        <PhoneInputMask
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          {...rest}
        />
      ) : type === 'select' ? (
        <SelectInput
          id={id}
          name={id}
          placeholder={placeholder}
          options={options}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          {...rest}
        />
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
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
};

InputWrapper.defaultProps = {
  labelOnly: false,
  noStyled: false,
  children: <></>,
  type: 'text',
  placeholder: '',
  options: [{}],
  defaultValue: '',
};

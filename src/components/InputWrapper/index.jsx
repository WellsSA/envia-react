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
    // other data
    options={[{ id: 1, title: 'Well' }, { id: 2, title: 'Wells' }]}
    defaultValue={initialData ? initialData.name : '0'}
  />

  --- phone input ---
  <InputWrapper
    // other data
    type="phone"
  />

  --- labelOnly wrapper ---
  <InputWrapper
    labelOnly
    styled={false}
  >
    {children}
  </InputWrapper>
*/

import { Container } from './styles';
import { Label } from '../_common';

export default function InputWrapper({
  id,
  label,
  type,
  placeholder,
  labelOnly,
  styled,
  children,
  options,
  defaultValue,
  ...rest
}) {
  const _styled = type === 'select' ? 'select' : styled ? 'default' : 'none';
  return (
    <Container styled={_styled}>
      <Label htmlFor={id}>{label}</Label>

      {labelOnly ? (
        children
      ) : type === 'phone' ? (
        <PhoneInputMask
          {...{ type: 'text', id, name: id, placeholder, ...rest }}
        />
      ) : type === 'select' ? (
        <SelectInput
          {...{ id, name: id, placeholder, options, defaultValue, ...rest }}
        />
      ) : (
        <Input {...{ id, type, placeholder, name: id, ...rest }} />
      )}
    </Container>
  );
}

InputWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  labelOnly: PropTypes.bool,
  styled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
};

InputWrapper.defaultProps = {
  label: '',
  labelOnly: false,
  styled: true,
  children: <></>,
  type: 'text',
  placeholder: '',
  options: [{}],
  defaultValue: '',
};

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
    type="select"
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
    styled="none"
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
  labelOnly,
  styled,
  children,
  options,
  defaultValue,
  ...rest
}) {
  const name = id;
  const _styled = type === 'select' ? 'select' : styled;
  return (
    <Container styled={_styled}>
      {label && <Label htmlFor={id}>{label}</Label>}

      {labelOnly ? (
        children
      ) : type === 'phone' ? (
        <PhoneInputMask {...{ type: 'text', id, name, ...rest }} />
      ) : type === 'select' ? (
        <SelectInput {...{ id, name, options, defaultValue, ...rest }} />
      ) : type === 'textarea' ? (
        <Input multiline {...{ id, name, ...rest }} />
      ) : (
        <Input {...{ id, name, type, ...rest }} />
      )}
    </Container>
  );
}

InputWrapper.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  labelOnly: PropTypes.bool,
  styled: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
};

InputWrapper.defaultProps = {
  id: (10 * Math.random(18)).toString(),
  label: '',
  labelOnly: false,
  styled: 'default',
  children: <></>,
  type: 'text',
  options: [{}],
  defaultValue: '',
};

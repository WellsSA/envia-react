import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import {
  maskWith9Digits,
  maskWithLessThan9Digits,
} from './phoneInputMask.data';

export default function PhoneInputMask(props) {
  const [mask, setMask] = useState(maskWithLessThan9Digits);
  const [value, setValue] = useState('');

  function handleInputChange({ target: { value: currentValue } }) {
    const clearValue = currentValue.replace(/\(|_|\)| |-/g, '');
    if (clearValue.length > 10) {
      setMask(maskWith9Digits);
      setValue(currentValue);
    } else if (mask !== maskWithLessThan9Digits) {
      setMask(maskWithLessThan9Digits);
      setValue(currentValue);
    }
  }

  return (
    <MaskedInput
      type="text"
      mask={mask}
      maxLength={17}
      value={value}
      onChange={handleInputChange}
      {...props}
    />
  );
}

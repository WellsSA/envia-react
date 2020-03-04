import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Value, SubMark } from './styles';

export default function QuantityDisplayer({ label, quantity, balance }) {
  return (
    <Container>
      <div>
        <Label>
          A <strong>quantidade total</strong> de {label}:
        </Label>
        <Value>{quantity}</Value>
      </div>
      <div>
        <Label>
          Seu <strong>saldo atual</strong> de {label}:
        </Label>
        <Value>{balance}</Value>
      </div>
      <SubMark>
        * Ao clicar em confirmar, a quantidade de {label} será descontada do seu
        saldo atual
      </SubMark>
    </Container>
  );
}

QuantityDisplayer.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

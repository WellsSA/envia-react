import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Value, SubMark } from './styles';

export default function QuantityDisplayer({ label, quantity, balance }) {
  return (
    <Container>
      <div>
        <Label>
          <strong>Quantidade total</strong> de {label} neste envio:
        </Label>
        <Value>{quantity}</Value>
      </div>
      <div>
        <Label>
          <strong>Seus créditos</strong> de {label}:
        </Label>
        <Value>{balance}</Value>
      </div>
      <SubMark>
        * A quantidade total é calculada com base na quantidade de alunos
        acrescida à quantidade de cópias para responsáveis.
      </SubMark>
    </Container>
  );
}

QuantityDisplayer.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

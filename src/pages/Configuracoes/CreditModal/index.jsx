import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Label, Title } from '../../../components/_common';
import { Container, SectionDivisor, QuantityContainer } from './styles';
import { currencyFormat } from '../../../utils/text';

function CreditModal({ visible, onSetVisible, handleSubmit, creditKind }) {
  const formId = 'credit-modal';
  const inputId = 'quantity';
  const unit_amount = creditKind === 'e-mail' ? 0.05 : 0.1;

  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    document.getElementById(inputId).focus();
  }, [visible]);

  function _handleSubmit(data) {
    handleSubmit({ ...data, kind: creditKind });
    document.getElementById(formId).reset();
    setQuantity('');
  }

  return (
    <ModalHelper
      title={`Aquisição de crédito de ${creditKind}`}
      visible={visible}
      onSetVisible={onSetVisible}
      formId={formId}
      confirmLabel="Confirmar"
    >
      <Container>
        <Notifier />
        <Form id={formId} onSubmit={_handleSubmit}>
          <Label content="10">Seu saldo atual:</Label>
          <Title>Selecione a quantidade de {creditKind} desejada</Title>
          <QuantityContainer>
            <InputWrapper
              autoFocus
              id={inputId}
              label="Quantidade:"
              placeholder="ex.: 20"
              type="number"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </QuantityContainer>
          <SectionDivisor>
            <section>
              <Label content={currencyFormat(unit_amount)}>
                Valor unitário:
              </Label>
            </section>
            <section>
              <Label content={currencyFormat(unit_amount * quantity)}>
                valor total:
              </Label>
            </section>
          </SectionDivisor>
        </Form>
      </Container>
    </ModalHelper>
  );
}

CreditModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  creditKind: PropTypes.string,
};

CreditModal.defaultProps = {
  creditKind: 'e-mail',
};

export default CreditModal;

import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Label } from '../../../components/_common';
import { Container, SectionDivisor } from './styles';

function CreditModal({ visible, onSetVisible, handleSubmit, creditKind }) {
  const formId = 'credit-modal';
  const placeholder = {
    name: 'ex.: Wellington Almeida',
  };

  function _handleSubmit(data) {
    handleSubmit(data);
    document.getElementById(formId).reset();
  }

  return (
    <ModalHelper
      title={`Aquisição de crédito de ${creditKind}`}
      visible={visible}
      onSetVisible={onSetVisible}
      formId={formId}
    >
      <Container>
        <Notifier />
        <Form id={formId} onSubmit={_handleSubmit}>
          <SectionDivisor>
            <section>
              <Label content="10">Seu saldo atual:</Label>
              <Label content="R$ 0,05">Valor unitário por {creditKind}:</Label>
            </section>
            <section>
              <Label content="0">Quantidade de {creditKind} desejada:</Label>
              <Label content="R$ 0,00">valor total:</Label>
            </section>
          </SectionDivisor>
          <InputWrapper
            id="name"
            label="Nome:"
            placeholder={placeholder.name}
          />
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

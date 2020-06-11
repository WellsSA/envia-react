import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
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
              <InputWrapper id="test1" label="Seu saldo atual" labelOnly />
              <InputWrapper id="test2" label="Nome:" labelOnly noStyled />
            </section>
            <section>
              <InputWrapper id="test3" label="Nome:" labelOnly noStyled />
              <InputWrapper id="test4" label="Nome:" labelOnly noStyled />
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
  creditKind: 'email',
};

export default CreditModal;

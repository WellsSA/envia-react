import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Container } from './styles';
import { PROFESSOR_SCHEMA } from '~/utils/schema';

export default function ProfessoresModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'professores-modal';
  const placeholder = {
    name: 'ex.: Wellington Almeida',
  };

  function _handleSubmit(data) {
    handleSubmit(data);
    document.getElementById(formId).reset();
  }

  return (
    <Container>
      <ModalHelper
        title="Cadastro de professores"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
      >
        <Notifier />
        <Form
          id={formId}
          schema={PROFESSOR_SCHEMA}
          initialData={initialData}
          onSubmit={_handleSubmit}
        >
          <InputWrapper
            id="name"
            label="Nome:"
            placeholder={placeholder.name}
          />
        </Form>
      </ModalHelper>
    </Container>
  );
}

ProfessoresModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
};

ProfessoresModal.defaultProps = {
  initialData: {},
};

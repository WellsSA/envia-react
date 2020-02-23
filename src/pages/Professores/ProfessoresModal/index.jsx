import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier } from '../../../components';
import { Container } from './styles';

export default function ProfessoresModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'professores-modal';
  const placeholder = {
    name: 'ex.: Informativo inicio de turma',
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
        <Form id={formId} initialData={initialData} onSubmit={_handleSubmit}>
          <div className="input">
            <label htmlFor="name">Nome:</label>
            <Input id="name" name="name" placeholder={placeholder.name} />
          </div>
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

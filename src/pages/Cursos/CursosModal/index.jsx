import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ModalHelper, Notifier, InputWrapper } from '~/components';
import { Alert } from '~/components/_common';
import { Container } from './styles';
import { CURSO_SCHEMA } from '~/utils/schema';

export default function CursosModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'cursos-modal';

  const placeholder = {
    name: 'ex.: Informática',
  };

  function _handleSubmit(data) {
    handleSubmit(data);
    document.getElementById(formId).reset();
  }

  return (
    <Container>
      <ModalHelper
        title="Cadastro de cursos"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
      >
        <Notifier />
        <Alert>
          Nota: A planilha de importação de Turmas também cria Cursos e
          Professores! <Link to="turmas">Confira</Link>.
        </Alert>
        <Form
          id={formId}
          schema={CURSO_SCHEMA}
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

CursosModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
};

CursosModal.defaultProps = {
  initialData: {},
};

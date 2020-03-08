import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Container } from './styles';
import { placeholder, schema } from './turmasModal.data';

export default function TurmasModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'modelos-modal';

  function _handleSubmit({ title, greeting, content }) {
    const id = initialData ? initialData.id : undefined;
    handleSubmit({ id, title, greeting, content });
    document.getElementById(formId).reset();
  }

  return (
    <Container>
      <ModalHelper
        title="Cadastro de Modelos de Mensagens"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
        confirmLabel={initialData ? 'Atualizar' : 'Cadastrar'}
      >
        <Notifier />
        <Form
          id={formId}
          schema={schema}
          initialData={initialData}
          onSubmit={_handleSubmit}
        >
          <InputWrapper
            id="title"
            label="Título da mensagem:"
            placeholder={placeholder.title}
          />
          <InputWrapper
            id="greeting"
            label="Saudação da mensagem:"
            placeholder={placeholder.greeting}
          />
          <span>
            * Informe a tag [NOME] onde deseja que o nome de seu aluno seja
            inserido.
          </span>
          <InputWrapper
            id="content"
            label="Conteúdo da Mensagem:"
            placeholder={placeholder.content}
          />
        </Form>
      </ModalHelper>
    </Container>
  );
}

TurmasModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
};

TurmasModal.defaultProps = {
  initialData: {},
};

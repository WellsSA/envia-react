import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Container } from './styles';

export default function CursosModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'turmas-modal';
  const placeholder = {
    name: 'ex.: 1º Informática Noite',
    days: 'ex.: Segunda, Quarta e Sexta',
    hours: 'ex.: das 7h às 10h',
    course: 'Selecionar curso...',
    teacher: 'Selecionar professor...',
  };

  function _handleSubmit(data) {
    handleSubmit(data);
    document.getElementById(formId).reset();
  }

  return (
    <Container>
      <ModalHelper
        title="Cadastro de turmas"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
      >
        <Notifier />
        <Form id={formId} initialData={initialData} onSubmit={_handleSubmit}>
          <InputWrapper
            id="name"
            label="Nome da turma:"
            placeholder={placeholder.name}
          />
          <InputWrapper
            id="days"
            label="Dias de aula:"
            placeholder={placeholder.days}
          />
          <InputWrapper
            id="hours"
            label="Horários:"
            placeholder={placeholder.hours}
          />
          <InputWrapper
            id="course"
            label="Curso:"
            type="select"
            placeholder={placeholder.course}
            options={[
              {
                title: 'Curso teste',
                id: '2',
              },
              {
                title: 'Novo curso',
                id: '3',
              },
            ]}
          />
          <InputWrapper
            id="teacher"
            label="Professor:"
            type="select"
            placeholder={placeholder.teacher}
            options={[
              {
                title: 'Esse curso sempre existiu',
                id: '4',
              },
              {
                title: 'Teste',
                id: '5',
              },
            ]}
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

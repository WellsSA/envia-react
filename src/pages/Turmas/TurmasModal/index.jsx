import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '~/components';
import { Alert } from '~/components/_common';
import { Container } from './styles';
import {
  placeholder,
  schema,
  loadCourses,
  loadTeachers,
} from './turmasModal.data';

export default function TurmasModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'turmas-modal';
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  function _handleSubmit({ name, days, hours, course, teacher }) {
    if (!course || !teacher) return;
    const id = initialData ? initialData.id : undefined;

    handleSubmit({ id, name, days, hours, course, teacher });

    document.getElementById(formId).reset();
  }

  useEffect(() => {
    loadCourses(data =>
      setCourses(data.map(({ id, name }) => ({ id, title: name })))
    );

    loadTeachers(data =>
      setTeachers(data.map(({ id, name }) => ({ id, title: name })))
    );
  }, []);

  return (
    <Container>
      <ModalHelper
        title="Cadastro de turmas"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
        confirmLabel={initialData ? 'Atualizar' : 'Cadastrar'}
      >
        <Notifier />
        <Alert>
          Nota: A planilha de importação de Turmas também cria Cursos e
          Professores!
        </Alert>
        <Form
          id={formId}
          schema={schema}
          initialData={initialData}
          onSubmit={_handleSubmit}
        >
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
            options={courses}
            defaultValue={initialData ? initialData.course : '0'}
          />
          <InputWrapper
            id="teacher"
            label="Professor:"
            type="select"
            placeholder={placeholder.teacher}
            options={teachers}
            defaultValue={initialData ? initialData.teacher : '0'}
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
  initialData: null,
};

import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';

import PropTypes from 'prop-types';
import Radios from './Radios';
import Turmas from './Turmas';

import {
  ModalHelper,
  Notifier,
  InputWrapper,
  EnviaKeyboardDatePicker,
} from '../../../components';

import { Container, Responsible, DatePlace } from './styles';
import {
  schema,
  placeholder,
  verifyAndAdd,
  verifyAndUpdate,
} from './alunosModal.data';

export default function AlunosModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'alunos-modal';
  const customIds = ['phone', 'responsible_phone', 'birthDate', 'turmas'];
  const [selectedDate, handleDateChange] = useState(new Date('2000/01/01'));
  const [isResponsible, setIsResponsible] = useState(true);

  async function _handleSubmit(data) {
    verifyAndAdd(customIds, data);
    const id = initialData ? initialData.id : undefined;
    const responsible_id = initialData ? initialData.responsible_id : undefined;
    handleSubmit({ id, responsible_id, ...data });
    document.getElementById(formId).reset();
  }

  useEffect(() => {
    verifyAndUpdate(customIds, initialData);
  }, [customIds, initialData]);

  return (
    <ModalHelper
      title="Cadastro de alunos"
      visible={visible}
      onSetVisible={onSetVisible}
      formId={formId}
      confirmLabel={initialData ? 'Atualizar' : 'Cadastrar'}
    >
      <Container isResponsible={isResponsible}>
        <Notifier />
        <Form
          id={formId}
          schema={schema}
          initialData={initialData}
          onSubmit={_handleSubmit}
        >
          <InputWrapper
            id="name"
            label="Nome do aluno:"
            placeholder={placeholder.name}
          />
          <InputWrapper
            id="email"
            label="Email do aluno:"
            placeholder={placeholder.email}
          />
          <InputWrapper
            id="phone"
            label="Celular do aluno:"
            type="phone"
            placeholder={placeholder.phone}
          />
          <InputWrapper
            label="Selecione a(s) turma(s) do aluno:"
            labelOnly
            styled="none"
          >
            <Turmas
              initialData={
                initialData && initialData.turmas
                  ? JSON.parse(initialData.turmas)
                  : undefined
              }
            />
          </InputWrapper>
          <DatePlace>
            <InputWrapper label="Data de nascimento:" labelOnly styled="none">
              <EnviaKeyboardDatePicker
                id="birthDate"
                name="birthDate"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </InputWrapper>
            <InputWrapper
              id="isResponsible"
              label="O aluno é o próprio responsável?"
              labelOnly
              styled="none"
            >
              <Radios value={isResponsible} onTap={setIsResponsible} />
            </InputWrapper>
          </DatePlace>
          <Responsible visible={!isResponsible}>
            <InputWrapper
              id="responsible"
              label="Nome do responsável:"
              placeholder={placeholder.responsible}
            />
            <InputWrapper
              id="responsible_email"
              label="E-mail do responsável:"
              placeholder={placeholder.responsible_email}
            />
            <InputWrapper
              id="responsible_phone"
              label="Celular do responsável:"
              type="phone"
              placeholder={placeholder.responsible_phone}
            />
          </Responsible>
        </Form>
      </Container>
    </ModalHelper>
  );
}

AlunosModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
};

AlunosModal.defaultProps = {
  initialData: {},
};

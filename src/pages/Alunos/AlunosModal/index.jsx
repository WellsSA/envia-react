import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';

import PropTypes from 'prop-types';
import Radios from './Radios';

import {
  ModalHelper,
  Notifier,
  InputWrapper,
  EnviaKeyboardDatePicker,
} from '../../../components';

import { Container, Responsible, DatePlace } from './styles';
import { schema, placeholder } from './alunosModal.data';

export default function AlunosModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'alunos-modal';
  const [selectedDate, handleDateChange] = useState(new Date('2000/01/01'));
  const [isResponsible, setIsResponsible] = useState(true);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  function _handleSubmit(data) {
    handleSubmit(data);
    document.getElementById(formId).reset();
  }

  return (
    <ModalHelper
      title="Cadastro de alunos"
      visible={visible}
      onSetVisible={onSetVisible}
      formId={formId}
    >
      <Container>
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
            id="turmas"
            label="Selecione a(s) turma(s) do aluno:"
            labelOnly
            noStyled
          >
            <>turma</>
          </InputWrapper>
          <DatePlace>
            <InputWrapper
              id="birthDate"
              label="Data de nascimento:"
              labelOnly
              noStyled
            >
              <EnviaKeyboardDatePicker
                value={selectedDate}
                onChange={handleDateChange}
              />
            </InputWrapper>
            <InputWrapper
              id="isResponsible"
              label="O aluno é o próprio responsável?"
              labelOnly
              noStyled
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

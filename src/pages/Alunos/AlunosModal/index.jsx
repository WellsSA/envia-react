import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';

import { ModalHelper, Notifier, InputWrapper } from '../../../components';
import { Container, Responsible, DatePlace, Radios } from './styles';
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
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
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
              placeholder={placeholder.phone}
            />
            <div className="input">
              <label>Selecione a(s) turma(s) do aluno:</label>
              turmas
            </div>
            <DatePlace>
              <InputWrapper
                id="birthDate"
                label="Data de nascimento:"
                labelOnly
              >
                <KeyboardDatePicker
                  disableFuture
                  openTo="year"
                  format="dd/MM/yyyy"
                  views={['year', 'month', 'date']}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </InputWrapper>
              <InputWrapper
                id="isResponsible"
                label="O aluno é o próprio responsável?"
                labelOnly
              >
                <Radios>
                  <label htmlFor="isResponsible">Sim</label>
                  <input
                    id="isResponsible"
                    type="radio"
                    value="sim"
                    checked={isResponsible}
                    readOnly
                    onClick={() => setIsResponsible(true)}
                  />
                  <label htmlFor="isResponsibleNo">Não</label>
                  <input
                    id="isResponsibleNo"
                    type="radio"
                    value="nao"
                    checked={!isResponsible}
                    readOnly
                    onClick={() => setIsResponsible(false)}
                  />
                </Radios>
              </InputWrapper>
            </DatePlace>
            <Responsible visible>
              {/* <div className="input">
                <label htmlFor="responsible">Nome do responsável:</label>
                <Input
                  id="responsible"
                  name="responsible"
                  placeholder={placeholder.responsible}
                />
              </div>
              <div className="input">
                <label htmlFor="responsible_email">
                  E-mail do responsável:
                </label>
                <Input
                  id="responsible_email"
                  name="responsible_email"
                  placeholder={placeholder.responsible_email}
                />
              </div>
              <div className="input">
                <label htmlFor="responsible_phone">
                  Celular do responsável:
                </label>
                <Input
                  id="responsible_phone"
                  name="responsible_phone"
                  placeholder={placeholder.responsible_phone}
                />
              </div> */}
            </Responsible>
          </Form>
        </Container>
      </MuiPickersUtilsProvider>
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

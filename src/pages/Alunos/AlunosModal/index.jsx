import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { ModalHelper, Notifier } from '../../../components';
import { Container, Responsible } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
  email: Yup.string()
    .email('Informe um e-mail válido!')
    .required('O e-mail é obrigatório *'),
  // birthDate: 'ex.: 12/12/2012',
  // phone: 'ex.: (11) 9555-5533',
  responsible: Yup.string(),
  responsible_email: Yup.string().email('Informe um e-mail válido'),
  // responsible_phone: 'ex.: (11) 9555-5533',
});

export default function ProfessoresModal({
  visible,
  onSetVisible,
  handleSubmit,
  initialData,
}) {
  const formId = 'alunos-modal';
  const placeholder = {
    name: 'ex.: João da Silva',
    email: 'ex.: aluno@envia.io',
    birthDate: 'ex.: 12/12/2012',
    phone: 'ex.: (11) 9555-5533',
    responsible: 'ex.: Antônio Silva',
    responsible_email: 'ex.: responsavel@responsavel.com',
    responsible_phone: 'ex.: (11) 9555-5533',
    // turmas: [1, 2, 3],
  };

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
          <div className="input">
            <label htmlFor="name">Nome do aluno:</label>
            <Input id="name" name="name" placeholder={placeholder.name} />
          </div>
          <div className="input">
            <label htmlFor="email">E-mail do aluno:</label>
            <Input id="email" name="email" placeholder={placeholder.email} />
          </div>
          <div className="input">
            <label htmlFor="phone">Celular do aluno:</label>
            <Input id="phone" name="phone" placeholder={placeholder.phone} />
          </div>
          <div className="input">
            <label>Selecione a(s) turma(s) do aluno:</label>
            turmas
          </div>
          <div>Data nasc / isResponsible</div>
          <Responsible visible>
            <div className="input">
              <label htmlFor="responsible">Nome do responsável:</label>
              <Input
                id="responsible"
                name="responsible"
                placeholder={placeholder.responsible}
              />
            </div>
            <div className="input">
              <label htmlFor="responsible_email">E-mail do responsável:</label>
              <Input
                id="responsible_email"
                name="responsible_email"
                placeholder={placeholder.responsible_email}
              />
            </div>
            <div className="input">
              <label htmlFor="responsible_phone">Celular do responsável:</label>
              <Input
                id="responsible_phone"
                name="responsible_phone"
                placeholder={placeholder.responsible_phone}
              />
            </div>
          </Responsible>
        </Form>
      </Container>
    </ModalHelper>
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

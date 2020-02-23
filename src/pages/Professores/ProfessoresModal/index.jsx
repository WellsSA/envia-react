import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { OverlayHelper, Notifier } from '../../../components';
import { Container } from './styles';

export default function ProfessoresModal({ handleSubmit }) {
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
      <OverlayHelper visible>
        <Notifier />
        <Form id={formId} onSubmit={_handleSubmit}>
          <div className="input">
            <label htmlFor="name">Nome:</label>
            <Input id="name" name="name" placeholder={placeholder.name} />
          </div>
        </Form>
      </OverlayHelper>
    </Container>
  );
}

ProfessoresModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

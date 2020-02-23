import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import OverlayHelper from '../../../components/OverlayHelper';
import { Container } from './styles';

export default function ProfessoresModal({ handleSubmit }) {
  const [shouldClear, setShouldClear] = useState(false);

  const placeholder = {
    name: 'ex.: Informativo inicio de turma',
  };

  function _handleSubmit() {
    handleSubmit();
    setShouldClear(true);
  }

  return (
    <Container>
      <OverlayHelper>
        <Form id="my-form" onSubmit={_handleSubmit}>
          <div className="input">
            <label htmlFor="name">Nome:</label>
            <Input
              id="name"
              name="name"
              placeholder={placeholder.name}
              {...(shouldClear ? { value: '' } : {})}
            />
          </div>
        </Form>
      </OverlayHelper>
    </Container>
  );
}

ProfessoresModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

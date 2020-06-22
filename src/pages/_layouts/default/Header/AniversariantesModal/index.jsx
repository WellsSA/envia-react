import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '~/components';
import { Container } from './styles';

const AniversariantesModal = ({ visible, onSetVisible }) => {
  // const students = [];
  const formId = 'aniversariantes-modal';

  function _handleSubmit(data) {
    // handleSubmit(data);
    console.log({ data });
    document.getElementById(formId).reset();
  }

  return (
    <Container>
      <ModalHelper
        title="Aniversariantes de hoje"
        visible={visible}
        onSetVisible={onSetVisible}
        formId={formId}
      >
        <Notifier />
        <Form id={formId} onSubmit={_handleSubmit}>
          <InputWrapper id="name" label="Nome:" />
        </Form>
      </ModalHelper>
    </Container>
  );
};

AniversariantesModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};

export default AniversariantesModal;

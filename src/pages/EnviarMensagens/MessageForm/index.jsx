import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function MessageForm({ onSubmit, next }) {
  const placeholder = {
    titulo: 'ex.: Informativo inicio de turma',
    saudacao: 'ex.: Olá [NOME], como você está?',
    mensagem: '',
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <div className="form__header">Escolher modelos de mensagens</div>
        <div className="form__body">
          <div className="form__body__input-section">
            <div className="input">
              <label htmlFor="titulo">Titulo:</label>
              <Input
                id="titulo"
                name="titulo"
                placeholder={placeholder.titulo}
              />
            </div>
            <div className="input">
              <label htmlFor="saudacao">Saudação:</label>
              <Input
                id="saudacao"
                name="saudacao"
                placeholder={placeholder.saudacao}
              />
            </div>
          </div>
          <div className="form__body__input-section">
            <div className="input">
              <label htmlFor="mensagem">Mensagem:</label>
              <Input
                multiline
                rows={10}
                id="mensagem"
                name="mensagem"
                placeholder={placeholder.mensagem}
              />
            </div>
          </div>
        </div>

        <div className="form__footer">
          <button type="submit">Next</button>
        </div>
      </Form>
    </Container>
  );
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

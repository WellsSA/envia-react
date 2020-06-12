import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FiFileText } from 'react-icons/fi';
import { Container, ModelosMensagens } from './styles';
import { changeMessage } from '../../../store/modules/message/actions';
import StepNavigator from '../StepNavigator';

export default function MessageForm() {
  const dispatch = useDispatch();

  function handleSubmit({ title, greeting, content }) {
    dispatch(changeMessage({ title, greeting, content }));
  }

  const placeholder = {
    title: 'ex.: Informativo inicio de turma',
    greeting: 'ex.: Olá [NOME], como você está?',
    content:
      'ex: estamos passando só pra te lembrar que no dia 04/01 suas aulas vão começar e estamos ansiosos para recebê-lo! Não se esqueça de trazer o seu material didático pois você fará os exercícios contidos nele ao final da aula. Até mais :)',
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="form__header">
          <ModelosMensagens onClick={() => alert('not working yet')}>
            <FiFileText />
            <span>Escolher modelo</span>
          </ModelosMensagens>
        </div>
        <div className="form__body">
          <div className="form__body__input-section">
            <div className="input">
              <label htmlFor="title">Titulo:</label>
              <Input id="title" name="title" placeholder={placeholder.title} />
            </div>
            <div className="input">
              <label htmlFor="greeting">Saudação:</label>
              <Input
                id="greeting"
                name="greeting"
                placeholder={placeholder.greeting}
              />
              <span>
                * Informe a tag <strong>[NOME]</strong> onde deseja que o nome
                de seu aluno seja inserido.
              </span>
            </div>
          </div>
          <div className="form__body__input-section">
            <div className="input">
              <label htmlFor="content">Mensagem:</label>
              <Input
                multiline
                rows={10}
                id="content"
                name="content"
                placeholder={placeholder.content}
              />
            </div>
          </div>
        </div>

        <StepNavigator submit notCancelable />
      </Form>
    </Container>
  );
}

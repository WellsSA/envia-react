import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';
import { Container, FormHeader, FormSection } from './styles';
import { changeMessage } from '~/store/modules/message/actions';
import { InputWrapper } from '~/components';
import StepNavigator from '../../StepNavigator';

import ModelosMensagens from './ModelosMensagens';

export default function MessageSetup() {
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
      <FormHeader>
        <ModelosMensagens />
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <InputWrapper
            id="title"
            label="Titulo:"
            placeholder={placeholder.title}
            styled="gray"
          />
          <InputWrapper
            id="greeting"
            label="Saudação:"
            placeholder={placeholder.greeting}
            styled="gray"
          />
          <span>
            * Informe a tag <strong>[NOME]</strong> onde deseja que o nome de
            seu aluno seja inserido.
          </span>
        </FormSection>
        <FormSection>
          <InputWrapper
            id="content"
            label="Mensagem:"
            placeholder={placeholder.content}
            type="textarea"
            rows={10}
            styled="gray"
          />
        </FormSection>

        <StepNavigator submit notCancelable onConfirm={() => {}} />
      </Form>
    </Container>
  );
}

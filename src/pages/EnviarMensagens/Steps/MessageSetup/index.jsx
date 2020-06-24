import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Container, FormHeader, FormSection } from './styles';
import { changeMessage } from '~/store/modules/message/actions';
import { InputWrapper } from '~/components';
import StepNavigator from '../../StepNavigator';

import ModelosMensagens from './ModelosMensagens';

const MessageSetup = ({ onConfirm, unique }) => {
  const dispatch = useDispatch();
  const currentMessage = useSelector(state => state.message.message);
  const [modelMessage, setModelMessage] = useState();
  const [title, setTitle] = useState('');
  const [greeting, setGreeting] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit() {
    dispatch(changeMessage({ title, greeting, content }));
  }

  useEffect(() => {
    if (!currentMessage || !currentMessage.title) return;
    setTitle(currentMessage.title);
    setGreeting(currentMessage.greeting);
    setContent(currentMessage.content);
  }, [currentMessage]);

  useEffect(() => {
    if (!modelMessage || !modelMessage.title) return;
    setTitle(modelMessage.title);
    setGreeting(modelMessage.greeting);
    setContent(modelMessage.content);
  }, [modelMessage]);

  const placeholder = {
    title: 'ex.: Informativo inicio de turma',
    greeting: 'ex.: Olá [NOME], como você está?',
    content:
      'ex: estamos passando só pra te lembrar que no dia 04/01 suas aulas vão começar e estamos ansiosos para recebê-lo! Não se esqueça de trazer o seu material didático pois você fará os exercícios contidos nele ao final da aula. Até mais :)',
  };

  return (
    <Container>
      <FormHeader>
        <ModelosMensagens
          unique={unique}
          onSelect={data => setModelMessage(data)}
        />
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <InputWrapper
            id={`title${unique}`}
            label="Titulo:"
            placeholder={placeholder.title}
            styled="gray"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <InputWrapper
            id={`greeting${unique}`}
            label="Saudação:"
            placeholder={placeholder.greeting}
            styled="gray"
            value={greeting}
            onChange={e => setGreeting(e.target.value)}
          />
          <span>
            * Informe a tag <strong>[NOME]</strong> onde deseja que o nome de
            seu aluno seja inserido.
          </span>
        </FormSection>
        <FormSection>
          <InputWrapper
            id={`content${unique}`}
            label="Mensagem:"
            placeholder={placeholder.content}
            type="textarea"
            rows={10}
            styled="gray"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </FormSection>

        <StepNavigator submit notCancelable onConfirm={onConfirm} />
      </Form>
    </Container>
  );
};

MessageSetup.propTypes = {
  onConfirm: PropTypes.func,
  unique: PropTypes.string,
};

MessageSetup.defaultProps = {
  onConfirm: () => {},
  unique: 'default',
};

export default MessageSetup;

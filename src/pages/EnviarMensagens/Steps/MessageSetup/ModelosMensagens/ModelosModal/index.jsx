import React, { useState, useEffect, memo } from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '~/components';
import { Container } from './styles';
import api from '~/services/api';

const placeholder = {
  select: 'Selecione o modelo',
  title: 'Aqui ficará o título do modelo selecionado',
  greeting: 'Esta é a saudação',
  content:
    'Relaxa, você pode editar o conteúdo assim que escolher um modelo! :D',
};

const ModelosModal = ({ visible, onSetVisible, onSubmit, unique }) => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState();

  const IDS = {
    form: `modelos-modal${unique}`,
    title: `titleM${unique}`,
    greeting: `greetingM${unique}`,
    content: `contentM${unique}`,
    model: `modelM${unique}`,
  };

  const _handleSubmit = data => {
    onSubmit({
      title: data[IDS.title],
      greeting: data[IDS.greeting],
      content: data[IDS.content],
    });
    onSetVisible(false);
    document.getElementById(IDS.form).reset();
  };

  const selectModel = id => {
    const _id = +id;
    const { title, greeting, content } = models.find(obj => obj.id === _id);
    setSelectedModel({
      [IDS.title]: title,
      [IDS.greeting]: greeting,
      [IDS.content]: content,
    });
  };

  useEffect(() => {
    if (!visible) return;

    (async () => {
      const { data, status } = await api.get('modelosMensagens');
      if (status !== 200) return;

      setModels(data);
    })();
  }, [visible]);

  return (
    <ModalHelper
      title="Modelos de mensagens"
      visible={visible}
      onSetVisible={onSetVisible}
      formId={IDS.form}
      confirmLabel="Escolher"
    >
      <Container>
        <Notifier />
        <Form
          id={IDS.form}
          initialData={selectedModel}
          onSubmit={_handleSubmit}
        >
          <InputWrapper
            id={IDS.model}
            placeholder={placeholder.select}
            type="select"
            options={models}
            onChange={e => selectModel(e.target.value)}
          />
          <InputWrapper
            id={IDS.title}
            label="Titulo:"
            placeholder={placeholder.title}
            styled="gray"
            disabled
          />
          <InputWrapper
            id={IDS.greeting}
            label="Saudação:"
            placeholder={placeholder.greeting}
            styled="gray"
            disabled
          />
          <InputWrapper
            id={IDS.content}
            label="Mensagem:"
            placeholder={placeholder.content}
            type="textarea"
            rows={10}
            styled="gray"
            disabled
          />
        </Form>
      </Container>
    </ModalHelper>
  );
};

ModelosModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  unique: PropTypes.string.isRequired,
};

export default memo(ModelosModal);

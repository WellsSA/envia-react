import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier, InputWrapper } from '~/components';
import { Container } from './styles';
import api from '~/services/api';

const formId = 'modelos-modal';

const placeholder = {
  select: 'Selecione o modelo',
  title: 'Aqui ficará o título do modelo selecionado',
  greeting: 'Esta é a saudação',
  content:
    'Relaxa, você pode editar o conteúdo assim que escolher um modelo! :D',
};

const ModelosModal = ({ visible, onSetVisible, onSubmit }) => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState();

  const _handleSubmit = ({ titleModel, greetingModel, contentModel }) => {
    onSubmit({
      title: titleModel,
      greeting: greetingModel,
      content: contentModel,
    });
    onSetVisible(false);
    document.getElementById(formId).reset();
  };

  const selectModel = id => {
    const _id = +id;
    const { title, greeting, content } = models.find(obj => obj.id === _id);
    setSelectedModel({
      titleModel: title,
      greetingModel: greeting,
      contentModel: content,
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
      formId={formId}
      confirmLabel="Escolher"
    >
      <Container>
        <Notifier />
        <Form id={formId} initialData={selectedModel} onSubmit={_handleSubmit}>
          <InputWrapper
            id="model"
            placeholder={placeholder.select}
            type="select"
            options={models}
            onChange={e => selectModel(e.target.value)}
          />
          <InputWrapper
            id="titleModel"
            label="Titulo:"
            placeholder={placeholder.title}
            styled="gray"
            disabled
          />
          <InputWrapper
            id="greetingModel"
            label="Saudação:"
            placeholder={placeholder.greeting}
            styled="gray"
            disabled
          />
          <InputWrapper
            id="contentModel"
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
};

export default ModelosModal;

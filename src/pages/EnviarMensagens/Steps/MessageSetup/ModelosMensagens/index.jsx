import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiFileText } from 'react-icons/fi';
import { Container } from './styles';
import ModelosModal from './ModelosModal';

function ModelosMensagens({ onSelect }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModelosModal
        visible={modalVisible}
        onSetVisible={setModalVisible}
        onSubmit={data => onSelect(data)}
      />
      <Container onClick={() => setModalVisible(true)}>
        <FiFileText />
        <span>Escolher modelo</span>
      </Container>
    </>
  );
}

ModelosMensagens.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default ModelosMensagens;

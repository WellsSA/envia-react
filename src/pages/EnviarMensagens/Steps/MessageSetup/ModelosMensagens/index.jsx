import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { Container } from './styles';

function ModelosMensagens() {
  return (
    <Container onClick={() => alert('not working yet')}>
      <FiFileText />
      <span>Escolher modelo</span>
    </Container>
  );
}

export default ModelosMensagens;

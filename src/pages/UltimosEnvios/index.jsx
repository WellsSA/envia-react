import React from 'react';

import { FaEnvelopeOpen } from 'react-icons/fa';
import { NamedSection } from '../../components';
import { Container } from './styles';

export default function Configuracoes() {
  return (
    <Container>
      <NamedSection name="Últimos Envios" icon={FaEnvelopeOpen}>
        <div>here</div>
      </NamedSection>
    </Container>
  );
}

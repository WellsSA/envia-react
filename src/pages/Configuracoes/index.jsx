import React from 'react';

import { FaCog } from 'react-icons/fa';
import { NamedSection } from '../../components';
import { Container } from './styles';

export default function Configuracoes() {
  return (
    <Container>
      <NamedSection name="Configurações" icon={FaCog}>
        <div>here</div>
      </NamedSection>
    </Container>
  );
}

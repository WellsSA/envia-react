import React from 'react';

import { FaHome } from 'react-icons/fa';
import { NamedSection } from '../../components';
import { Container } from './styles';

export default function Configuracoes() {
  return (
    <Container>
      <NamedSection name="Home" icon={FaHome}>
        <div>here</div>
      </NamedSection>
    </Container>
  );
}

import React from 'react';
import { Form } from '@rocketseat/unform';
import { FaCog } from 'react-icons/fa';
import { NamedSection, SectionDivisor } from '../../components';
import { Container } from './styles';
import ProfileSection from './ProfileSection';
import ConfigSection from './ConfigSection';

export default function Configuracoes() {
  return (
    <NamedSection name="Configurações" icon={FaCog}>
      <Container>
        <Form>
          <SectionDivisor>
            <ProfileSection />
            <ConfigSection />
          </SectionDivisor>
          <button type="submit" className="confirm">
            Finalizar edição
          </button>
          <button type="submit" className="cancel">
            Sair do Envia
          </button>
        </Form>
      </Container>
    </NamedSection>
  );
}

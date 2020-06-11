import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import { FaCog } from 'react-icons/fa';
import { NamedSection, SectionDivisor } from '../../components';
import { Button } from '../../components/_common';
import { Container } from './styles';
import ProfileSection from './ProfileSection';
import ConfigSection from './ConfigSection';
import CreditModal from './CreditModal';

export default function Configuracoes() {
  const [creditModalVisible, setCreditModalVisible] = useState(true);
  const [creditKind, setCreditKind] = useState();

  const addCredit = kind => {
    console.log(kind);
    setCreditKind(kind);
    setCreditModalVisible(true);
  };
  return (
    <>
      <CreditModal
        creditKind={creditKind}
        visible={creditModalVisible}
        onSetVisible={setCreditModalVisible}
        handleSubmit={() => alert('submit!!!')}
      />
      <NamedSection name="Configurações" icon={FaCog}>
        <Container>
          <Form>
            <SectionDivisor>
              <ProfileSection onAddCredit={addCredit} />
              <ConfigSection />
            </SectionDivisor>
            <Button type="submit" kind="confirm">
              Finalizar edição
            </Button>
            <Button type="submit" kind="cancel">
              Sair do Envia
            </Button>
          </Form>
        </Container>
      </NamedSection>
    </>
  );
}

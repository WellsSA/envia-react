import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';
import { FaCog } from 'react-icons/fa';
import { NamedSection, SectionDivisor } from '../../components';
import { Button } from '../../components/_common';
import { Container } from './styles';
import ProfileSection from './ProfileSection';
import ConfigSection from './ConfigSection';
import CreditModal from './CreditModal';
import { addCredits } from '../../store/modules/user/actions';

export default function Configuracoes() {
  const dispatch = useDispatch();
  const [creditModalVisible, setCreditModalVisible] = useState(true);
  const [creditKind, setCreditKind] = useState();

  const openCreditModal = kind => {
    setCreditKind(kind);
    setCreditModalVisible(true);
  };

  const addCredit = (kind, quantity) =>
    dispatch(addCredits({ kind, quantity }));
  return (
    <>
      <CreditModal
        creditKind={creditKind}
        visible={creditModalVisible}
        onSetVisible={setCreditModalVisible}
        handleSubmit={({ kind, quantity }) => addCredit(kind, quantity)}
      />
      <NamedSection name="Configurações" icon={FaCog}>
        <Container>
          <Form>
            <SectionDivisor>
              <ProfileSection onAddCredit={openCreditModal} />
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

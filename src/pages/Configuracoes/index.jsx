import { Form } from '@rocketseat/unform';
import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { NamedSection, SectionDivisor } from '~/components';
import { Button } from '~/components/_common';
import { signOut } from '~/store/modules/auth/actions';
import { addCredits, updateProfileRequest } from '~/store/modules/user/actions';

import ConfigSection from './ConfigSection';
import CreditModal from './CreditModal';
import ProfileSection from './ProfileSection';
import { Container } from './styles';

import ProfileSchema from './profile.schema';

export default function Configuracoes() {
  const dispatch = useDispatch();
  const { profile, licence } = useSelector(state => state.user);

  const [creditModalVisible, setCreditModalVisible] = useState(false);
  const [creditKind, setCreditKind] = useState();

  const openCreditModal = kind => {
    setCreditKind(kind);
    setCreditModalVisible(true);
  };

  const addCredit = (kind, quantity) =>
    dispatch(addCredits({ kind, quantity }));

  const submit = data => {
    dispatch(updateProfileRequest({ user: data }));
  };

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
          <Form initialData={profile} schema={ProfileSchema} onSubmit={submit}>
            <SectionDivisor>
              <ProfileSection onAddCredit={openCreditModal} />
              <ConfigSection licence={licence} />
            </SectionDivisor>
            <Button type="submit" kind="confirm">
              Finalizar edição
            </Button>
            <Button kind="cancel" onClick={() => dispatch(signOut())}>
              Sair do Envia
            </Button>
          </Form>
        </Container>
      </NamedSection>
    </>
  );
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaWhatsapp } from 'react-icons/fa';
import { GoComment, GoMail } from 'react-icons/go';

import { setupPlatform, switchPlatform } from '~/store/modules/message/actions';
import { Title } from '~/components/_common';

import StepNavigator from '../../StepNavigator';
import MailModal from './MailModal';
import Platform from './Platform';

import { Container } from './styles';

export default function PlatformsSetup() {
  const dispatch = useDispatch();
  const platforms = useSelector(state => state.message.platforms);
  const [mailModalVisible, setMailModalVisible] = useState(false);

  function togglePlatform(platform) {
    switch (platform) {
      case 'email':
        if (platforms.email) dispatch(switchPlatform({ platform }));
        else setMailModalVisible(true);
        break;
      case 'sms':
        alert('Não disponível ainda');
        break;
      case 'whatsapp':
        alert('Não disponível ainda');
        break;
      default:
    }
  }

  return (
    <>
      <MailModal
        visible={mailModalVisible}
        onSetVisible={setMailModalVisible}
      />
      <Title>Selecione a forma de envio:</Title>
      <Container>
        <Platform
          icon={GoMail}
          label="Email"
          value="email"
          onTap={togglePlatform}
        />
        <Platform
          icon={GoComment}
          label="SMS"
          value="sms"
          onTap={togglePlatform}
        />
        <Platform
          icon={FaWhatsapp}
          label="Whatsapp"
          value="whatsapp"
          onTap={togglePlatform}
        />
      </Container>
      <StepNavigator onConfirm={() => dispatch(setupPlatform())} />
    </>
  );
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoComment } from 'react-icons/go';
import { Container } from './styles';
import {
  switchPlatform,
  setupPlatform,
} from '../../../store/modules/message/actions';
import Platform from './Platform';
import StepNavigator from '../StepNavigator';
import MailModal from './MailModal';

export default function Platforms() {
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

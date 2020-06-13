import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setupPlatform, switchPlatform } from '~/store/modules/message/actions';
import { PLATFORMS_ARR } from '~/store/modules/message/data';
import { Title } from '~/components/_common';

import StepNavigator from '../../StepNavigator';
import MailModal from './MailModal';
import Platform from './Platform';

import { Container } from './styles';

const PlatformsSetup = () => {
  const dispatch = useDispatch();
  const [mailModalVisible, setMailModalVisible] = useState(false);

  function togglePlatform(platform) {
    switch (platform) {
      case 'email':
        // if (platforms.email) dispatch(switchPlatform({ platform }));
        // else setMailModalVisible(true);
        alert('Não disponível ainda');
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
        {PLATFORMS_ARR.map(({ icon, label, value }) => (
          <Platform
            key={`platarr${value}`}
            icon={icon}
            label={label}
            value={value}
            onTap={togglePlatform}
          />
        ))}
      </Container>
      <StepNavigator onConfirm={() => dispatch(setupPlatform())} />
    </>
  );
};

export default PlatformsSetup;

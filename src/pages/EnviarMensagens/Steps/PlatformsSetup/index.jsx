import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setupPlatforms } from '~/store/modules/message/actions';
import { PLATFORMS, PLATFORMS_ARR } from '~/store/modules/message/data';
import { Title } from '~/components/_common';

import StepNavigator from '../../StepNavigator';
import MailModal from './MailModal';
import Platform from './Platform';

import { Container } from './styles';

const PlatformsSetup = () => {
  const dispatch = useDispatch();
  const [platforms, setPlatforms] = useState([]);
  const [mailModalVisible, setMailModalVisible] = useState(false);

  const addPlatform = platform => {
    setPlatforms(prev => [...prev, platform]);
  };

  const verifyIfExistsAndRemove = platform => {
    const isMarked = platforms.findIndex(_platform => _platform === platform);
    if (isMarked !== -1) {
      setPlatforms(prev => {
        const next = [...prev];
        next.splice(isMarked, 1);
        return next;
      });
      return true;
    }
    return false;
  };

  function togglePlatform(platform) {
    if (verifyIfExistsAndRemove(platform)) return;

    switch (platform) {
      case PLATFORMS.EMAIL.value:
        setMailModalVisible(true);
        break;
      case PLATFORMS.SMS.value:
        alert('Não disponível ainda');
        break;
      case PLATFORMS.WHATSAPP.value:
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
        onConfirm={platform => addPlatform(platform)}
      />
      <Title>Selecione a forma de envio:</Title>
      <Container>
        {PLATFORMS_ARR.map(({ icon, label, value }) => (
          <Platform
            key={`platarr${value}`}
            checked={platforms.includes(value)}
            icon={icon}
            label={label}
            value={value}
            onTap={togglePlatform}
          />
        ))}
      </Container>
      <StepNavigator
        centered
        onConfirm={() => dispatch(setupPlatforms({ platforms }))}
      />
    </>
  );
};

export default PlatformsSetup;

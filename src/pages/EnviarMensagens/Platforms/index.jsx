import React from 'react';
import { useDispatch } from 'react-redux';
import { FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoComment } from 'react-icons/go';
import { Container } from './styles';
import {
  switchPlatform,
  setupPlatform,
} from '../../../store/modules/message/actions';
import Platform from './Platform';
import StepNavigator from '../StepNavigator';
// import { StepNavigator } from '../_components';

export default function Platforms() {
  const dispatch = useDispatch();

  function togglePlatform(platform) {
    dispatch(switchPlatform({ platform }));
  }

  return (
    <>
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

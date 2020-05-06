import React from 'react';

import { Container, OptionBar } from './styles';

export default function ProfileAvatar() {
  function toggleOptionBar() {
    alert('here');
  }

  return (
    <Container onClick={toggleOptionBar}>
      <img src="https://wellsadev.com/images/wells.jpg" alt="Envia" />
      <OptionBar />
    </Container>
  );
}

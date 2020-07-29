import React from 'react';
import Tour from 'reactour';
import { Container } from './styles';

function EnviaTour() {
  const firstAccess = true;

  const steps = [
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
  ];

  return (
    <Container>
      {!firstAccess ? (
        <></>
      ) : (
        <Tour
          steps={steps}
          className="envia-tour"
          isOpen
          onRequestClose={() => alert('closing')}
        />
      )}
    </Container>
  );
}

export default EnviaTour;

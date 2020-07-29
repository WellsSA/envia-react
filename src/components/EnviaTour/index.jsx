import React, { useContext } from 'react';
import Tour from 'reactour';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import steps from './steps.data';

function EnviaTour() {
  const firstAccess = true;
  const currentStep = 3; // TODO: REMOVE IT
  const { colors } = useContext(ThemeContext);

  return (
    <>
      {!firstAccess ? (
        <></>
      ) : (
        <Container>
          <span id="envia-sidebar" />
          <span id="envia-sidebar-expanded" />
          {/* <span id="envia-sidebar-expanded" /> */}

          <Tour
            steps={steps}
            className="envia-tour"
            isOpen={firstAccess}
            accentColor={colors.primary}
            onRequestClose={() => alert('closing')}
            rounded={12}
            showCloseButton={false}
            startAt={currentStep}
          />
        </Container>
      )}
    </>
  );
}

export default EnviaTour;

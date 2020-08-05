import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Tour from 'reactour';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import steps from './steps.data';

function EnviaTour() {
  const profile = useSelector(state => state.user.profile);
  const firstAccess = profile && profile.firstAccess;
  const { colors } = useContext(ThemeContext);

  return (
    <>
      {!firstAccess ? (
        <></>
      ) : (
        <Container>
          <span id="envia-avatar-marker" />
          <span id="envia-sidebar-marker" />
          <span id="envia-sidebar-expanded" />
          <span id="envia-sidebar-home" />
          <span id="envia-sidebar-send" />
          <span id="envia-sidebar-cruds" />
          <span id="envia-sidebar-sent" />
          <span id="envia-sidebar-models" />
          <span id="envia-master-classes" />

          <Tour
            steps={steps}
            className="envia-tour"
            isOpen={firstAccess}
            accentColor={colors.primary}
            onRequestClose={() => {}}
            rounded={12}
            showCloseButton={false}
            startAt={0}
          />
        </Container>
      )}
    </>
  );
}

export default EnviaTour;

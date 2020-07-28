import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, MobileWarning } from './styles';
import { breakpoints } from '~/styles/scale';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      {window.innerWidth > breakpoints.mobile ? (
        <Content>{children}</Content>
      ) : (
        <MobileWarning>
          <h1>
            Ansioso pela versão mobile do ENVIA? <br />
            Ela estará disponível em breve!
          </h1>
          <br />
          <br />
          <p>
            Por hora, utilize um notebook ou desktop para obter a melhor
            experiência possível :D
          </p>
        </MobileWarning>
      )}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import { Wrapper, Container, MobileWarning } from './styles';
import { breakpoints } from '~/styles/scale';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      {window.innerWidth > breakpoints.mobile ? (
        <>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      ) : (
        <MobileWarning>
          <h1>
            Ancioso pela versão mobile do ENVIA? <br />
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

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

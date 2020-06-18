import React, { memo } from 'react';

import enviosPNG from '~/assets/envios.png';
import { Mark, Container, Links, Image } from './styles';

function Footer() {
  return (
    <>
      <Mark>ENVIA - A melhor forma de aproximar seus alunos</Mark>
      <Container>
        <Links>
          <h2>Suporte</h2>
          <ul>
            <li>
              <a href="https://envia.io" target="blank">
                Tutoriais
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                Dúvidas Frequentes
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                Dicas e Truques
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                Fale Conosco
              </a>
            </li>
          </ul>
        </Links>
        <Links>
          <h2>Acompanhe-nos</h2>
          <ul>
            <li>
              <a href="https://envia.io" target="blank">
                Website
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://envia.io" target="blank">
                Youtube
              </a>
            </li>
          </ul>
        </Links>
        <Image>
          <img
            src={enviosPNG}
            alt="Envia - a melhor maneira de conectar seus alunos"
          />
        </Image>
      </Container>
    </>
  );
}

export default memo(Footer);

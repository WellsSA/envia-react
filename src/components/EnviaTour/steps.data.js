import React from 'react';
import { Marker } from './styles';

export default [
  {
    content: () => (
      <>
        <Marker>
          <b>Olá! Seja bem vindo ao ENVIA!</b>
        </Marker>
      </>
    ),
  }, // BEM VINDO
  {
    selector: '#envia-sidebar',
    content: () => (
      <>
        <Marker>
          Aqui fica a <b>navegação principal</b>. <strong>Passe o mouse</strong>{' '}
          para abrir.
        </Marker>
      </>
    ),
  }, // SIDEBAR
  {
    selector: '#envia-sidebar-expanded',
    content: () => (
      <>
        <Marker>
          Com a <b>navegação principal</b> <strong>aberta</strong>. Você pode
          <strong> navegar</strong> para <strong>qualquer parte</strong> da
          aplicação.
        </Marker>
      </>
    ),
  }, // SIDEBAR ABERTA
  {
    selector: '#teste-teste',
    content: () => (
      <>
        <Marker>
          Com a <b>navegação principal</b> <strong>aberta</strong>. Você pode
          <strong> navegar</strong> para <strong>qualquer parte</strong> da
          aplicação.
        </Marker>
      </>
    ),
  },
  // {
  //   selector: '#envia-avatar',
  //   content: () => (
  //     <>
  //       <Marker>Aqui fica o gerenciamento do seu perfil.</Marker>
  //     </>
  //   ),
  //   position: [150, 120],
  // },
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

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
    stepInteraction: false,
  }, // SIDEBAR ABERTA
  {
    selector: '#envia-sidebar-cruds',
    content: () => (
      <>
        <Marker>
          Aqui você pode <b>gerenciar</b> seus <strong>Cursos</strong>,
          <strong> Professores</strong>,<strong> Turmas</strong> e
          <strong> Alunos</strong>.
        </Marker>
      </>
    ),
    stepInteraction: false,
  }, // CURSOS, PROFESSORES, TURMAS E ALUNOS
  {
    selector: '#envia-sidebar-send',
    content: () => (
      <>
        <Marker>
          Aqui você pode <b>enviar mensagens</b> para seus{' '}
          <strong>Alunos já cadastrados</strong>.
        </Marker>
      </>
    ),
    stepInteraction: false,
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

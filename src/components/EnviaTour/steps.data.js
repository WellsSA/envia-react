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
    selector: '#envia-avatar',
    // TODO: abrir menu automaticamente
    content: () => (
      <>
        <Marker>
          Aqui fica o <b>gerenciamento</b> do <strong>seu perfil</strong>.
        </Marker>
      </>
    ),
    stepInteraction: false,
  },
  {
    selector: '#envia-sidebar',
    // TODO: fechar menu avatar automaticamente
    content: () => (
      <>
        <Marker>
          Aqui fica a <b>navegação principal</b>. <strong>Clique</strong> para
          abrir.
        </Marker>
      </>
    ),
  }, // SIDEBAR
  {
    selector: '#envia-sidebar-expanded',
    // TODO: abrir sidebar automaticamente se não estiver aberta
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
  }, // ENVIAR MENSAGENS
  {
    selector: '#envia-sidebar-sent',
    content: () => (
      <>
        <Marker>
          Depois de <b>enviar as mensagens</b>, você pode{' '}
          <strong>conferir seus últimos envios</strong> aqui.
        </Marker>
      </>
    ),
    stepInteraction: false,
  }, // ÚLTIMOS ENVIOS
  {
    selector: '#envia-sidebar-models',
    content: () => (
      <>
        <Marker>
          Para <b>as mensagens que você mais envia</b>, você pode{' '}
          <strong>criar modelos pré-definidos</strong> aqui. (ou aproveitar os
          que já disponibilizamos para você)
        </Marker>
      </>
    ),
    stepInteraction: false,
  }, // MODELOS DE MENSAGENS
  {
    selector: '#envia-master-classes',
    content: () => (
      <>
        <Marker>
          Além disso, você pode desfrutar de nossas <b>master classes</b>{' '}
          elaboradas para você se especializar nos{' '}
          <strong>3 principais pilares da fidelização de alunos!</strong>
        </Marker>
      </>
    ),
    stepInteraction: false,
  }, // MASTER CLASSES
];

import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function OverlayHelper() {
  const visible = useSelector(state => state.overlay.visible);

  const Element = useSelector(state => state.overlay.component);
  return (
    <Container visible={visible}>{Element ? <Element /> : <></>}</Container>
  );
}

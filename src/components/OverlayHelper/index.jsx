import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function OverlayHelper() {
  const Element = useSelector(state => state.overlay.component);
  return <Container>{Element}</Container>;
}

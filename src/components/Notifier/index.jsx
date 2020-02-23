import React from 'react';
import { useSelector } from 'react-redux';
// import { Container } from './styles';

export default function Notifier() {
  const message = useSelector(state => state.notify.message);

  return <p>Notifier {message}</p>;
}

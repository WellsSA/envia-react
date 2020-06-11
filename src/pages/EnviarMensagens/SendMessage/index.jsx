import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft, FaTelegramPlane } from 'react-icons/fa';
import { Container, Marker, Confirm } from './styles';
import { prevStep } from '../../../store/modules/message/actions';
import { Button } from '../../../components/_common';

export default function SendMessage() {
  const dispatch = useDispatch();
  const platforms = useSelector(state => state.message.platforms);

  function handleConfirm() {
    if (platforms.email) {
      alert('sending mail!');
    }
  }
  return (
    <Container>
      <Marker />
      <Confirm>
        <Button kind="cancel" onClick={() => dispatch(prevStep())}>
          <FaArrowLeft />
          Anterior
        </Button>
        <Button kind="confirm" onClick={handleConfirm}>
          Enviar
          <FaTelegramPlane />
        </Button>
      </Confirm>
    </Container>
  );
}

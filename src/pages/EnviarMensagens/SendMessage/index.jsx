import React from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowLeft, FaTelegramPlane } from 'react-icons/fa';
import { Container, Marker, Confirm } from './styles';
import { prevStep } from '../../../store/modules/message/actions';

export default function SendMessage() {
  const dispatch = useDispatch();

  function handleConfirm() {
    alert('yupi!');
  }
  return (
    <Container>
      <Marker />
      <Confirm>
        <button
          type="button"
          className="cancel"
          onClick={() => dispatch(prevStep())}
        >
          <FaArrowLeft />
          Anterior
        </button>
        <button type="button" className="confirm" onClick={handleConfirm}>
          Enviar
          <FaTelegramPlane />
        </button>
      </Confirm>
    </Container>
  );
}
